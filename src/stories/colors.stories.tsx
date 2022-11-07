import { Box, Text } from 'theme-ui';
import { colors, ColorVariant } from '../theme/colors';

export function LightModeColors() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '2rem' }}>
        Light mode colors
      </Text>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          padding: 0,
          gap: '1rem'
        }}>
        {Object.keys(colors)
          .filter((key) => key !== 'modes')
          .map((colorVariant) => (
            <Box
              key={colorVariant}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 0 3px 0 gray',
                justifyContent: 'space-between',
                padding: '1rem'
              }}>
              <Box
                sx={{
                  backgroundColor: colors[colorVariant as ColorVariant],
                  width: '128px',
                  height: '128px'
                }}
              />

              <Box sx={{ width: '128px' }}>
                <Text variant="smallCaps" sx={{ wordBreak: 'break-all' }}>
                  {colorVariant}
                </Text>
                <br />
                <Text variant="smallCaps" sx={{ wordBreak: 'break-all' }}>
                  {colors[colorVariant as ColorVariant]}
                </Text>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export function DarkModeColors() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '2rem' }}>
        Dark mode colors
      </Text>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          padding: 0,
          gap: '1rem'
        }}>
        {Object.keys(colors.modes.dark).map((colorVariant) => {
          return (
            <Box
              key={colorVariant}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 0 3px 0 gray',
                justifyContent: 'space-between',
                padding: '1rem'
              }}>
              <Box
                sx={{
                  backgroundColor:
                    colors.modes.dark[colorVariant as ColorVariant],
                  width: '128px',
                  height: '128px'
                }}
              />

              <Box sx={{ width: '128px' }}>
                <Text variant="smallCaps" sx={{ wordBreak: 'break-all' }}>
                  {colorVariant}
                </Text>
                <br />
                <Text variant="smallCaps" sx={{ wordBreak: 'break-all' }}>
                  {colors.modes.dark[colorVariant as ColorVariant]}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

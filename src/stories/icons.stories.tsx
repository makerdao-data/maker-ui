import { Box, Text } from '@theme-ui/components';
import * as BrandIcons from '../components/icons/brand';
import * as UIIcons from '../components/icons/web';

export function Icons() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '2rem' }}>
        Icons
      </Text>

      <Box
        as="ul"
        sx={{
          display: 'grid',
          listStyle: 'none',
          gridTemplateColumns: 'repeat(auto-fill,minmax(11rem,5fr))',
          gridTemplateRows: 'repeat(auto-fill,minmax(11rem,0))',
          gap: '1rem',
          width: '100%',
          padding: 0
        }}
      >
        {Object.values(UIIcons).map((Icon, index) => (
          <Box
            key={Icon.displayName + index}
            as="li"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 0 3px 0 gray',
              justifyContent: 'space-between'
            }}
          >
            <Box
              sx={{
                width: '100%',
                padding: '0 1rem',
                '& > svg': {
                  margin: '2.5rem auto 1rem',
                  display: 'block'
                }
              }}
            >
              <Icon />
            </Box>

            <Box sx={{ width: '100%', padding: '1rem 1rem 1.5rem' }}>
              <Text variant="smallCaps" sx={{ wordBreak: 'break-all' }}>
                {Icon.displayName}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function Brand() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '2rem' }}>
        Brand Icons
      </Text>

      <Box
        as="ul"
        sx={{
          display: 'grid',
          listStyle: 'none',
          gridTemplateColumns: 'repeat(auto-fill,minmax(11rem,5fr))',
          gridTemplateRows: 'repeat(auto-fill,minmax(11rem,0))',
          gap: '1rem',
          width: '100%',
          padding: 0
        }}
      >
        {Object.values(BrandIcons).map((Icon) => (
          <Box
            key={Icon.displayName}
            as="li"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 0 3px 0 gray',
              justifyContent: 'space-between'
            }}
          >
            <Box
              sx={{
                width: '100%',
                padding: '0 1rem',
                '& > svg': {
                  margin: '2.5rem auto 1rem',
                  display: 'block'
                }
              }}
            >
              <Icon />
            </Box>

            <Box sx={{ width: '100%', padding: '1rem 1rem 1.5rem' }}>
              <Text variant="smallCaps" sx={{ wordBreak: 'break-all' }}>
                {Icon.displayName}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

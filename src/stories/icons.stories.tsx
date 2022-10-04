import { Box, Text } from '@theme-ui/components';
import * as AllIcons from '../components/icons';

export function Icons() {
  return (
    <Box
      as="ul"
      sx={{
        display: 'grid',
        listStyle: 'none',
        gridTemplateColumns: 'repeat(auto-fill,minmax(11rem,0))',
        gridTemplateRows: 'repeat(auto-fill,minmax(11rem,0))',
        gap: '1rem'
      }}>
      {Object.values(AllIcons).map((Icon) => (
        <Box
          key={Icon.displayName}
          as="li"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 0 3px 0 gray',
            justifyContent: 'space-between'
          }}>
          <Box
            sx={{
              width: '100%',
              padding: '0 1rem',
              '& > svg': {
                margin: '2.5rem auto 1rem',
                display: 'block'
              }
            }}>
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
  );
}

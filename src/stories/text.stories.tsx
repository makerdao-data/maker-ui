import { Box } from 'theme-ui';
import { Text } from '../components';

export function Typography() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="largeHeading" sx={{ width: '100%' }}>
        Large Heading
      </Text>
      <Text variant="mediumHeading" sx={{ width: '100%' }}>
        Medium Heading
      </Text>
      <Text variant="heading" sx={{ width: '100%' }}>
        Heading
      </Text>
      <Text variant="smallHeading" sx={{ width: '100%' }}>
        Small Heading
      </Text>
      <Text variant="microHeading" sx={{ width: '100%' }}>
        Micro Heading
      </Text>
      <Text variant="text" sx={{ width: '100%' }}>
        Normal Text
      </Text>
      <Text variant="smallText" sx={{ width: '100%' }}>
        Small Text
      </Text>
      <Text variant="microText" sx={{ width: '100%' }}>
        Micro Text
      </Text>

      <Text variant="caps" sx={{ width: '100%', marginTop: '2rem' }}>
        Caps Text
      </Text>
    </Box>
  );
}

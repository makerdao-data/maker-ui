import { Box } from 'theme-ui';
import { Text } from '../components';
import Story from './Story';

export function Typography() {
  return (
    <Story title="Typography">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}
      >
        <Text variant="smallHeading" sx={{ width: '100%' }}>
          body
        </Text>

        <Text sx={{ width: '100%' }}>
          -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
          Ubuntu
        </Text>

        <Text variant="smallHeading" sx={{ width: '100%' }}>
          heading
        </Text>

        <Text sx={{ width: '100%' }}>
          -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
          Ubuntu
        </Text>

        <Text variant="smallHeading" sx={{ width: '100%' }}>
          monospace
        </Text>

        <Text sx={{ width: '100%' }}>monospace</Text>

        <Text variant="smallHeading" sx={{ width: '100%', marginTop: '1rem' }}>
          Sizes variants
        </Text>

        <Text variant="microText" sx={{ width: '100%' }}>
          Micro Text{' '}
        </Text>

        <Text variant="smallText" sx={{ width: '100%' }}>
          Small Text
        </Text>
        <Text variant="text" sx={{ width: '100%' }}>
          Normal Text
        </Text>
        <Text variant="microHeading" sx={{ width: '100%' }}>
          Micro Heading
        </Text>
        <Text variant="smallHeading" sx={{ width: '100%' }}>
          Small Heading
        </Text>
        <Text variant="heading" sx={{ width: '100%' }}>
          Heading
        </Text>
        <Text variant="mediumHeading" sx={{ width: '100%' }}>
          Medium Heading
        </Text>
        <Text variant="largeHeading" sx={{ width: '100%' }}>
          Large Heading
        </Text>

        <Text variant="caps" sx={{ width: '100%', marginTop: '1rem' }}>
          Caps Text
        </Text>

        <Text variant="muted" sx={{ width: '100%' }}>
          Muted
        </Text>

        <Text variant="boldBody" sx={{ width: '100%' }}>
          Bold body
        </Text>

        <Text variant="error" sx={{ width: '100%' }}>
          Error
        </Text>
      </Box>
    </Story>
  );
}

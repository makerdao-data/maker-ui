import { Button } from '../components';
import { Box } from 'theme-ui';

export function ButtonPrimary() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
    </Box>
  );
}

export function ButtonOutline() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Button variant="outline">Outline</Button>
    </Box>
  );
}

export function ButtonSmall() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Button variant="small">Small</Button>
      <Button variant="smallOutline">Small Outline</Button>
    </Box>
  );
}

export function ButtonText() {
  return <Button variant="textual">Text button</Button>;
}

import { Button } from '../components';
import { Box } from 'theme-ui';
// import { MakerIcon } from '../components';

export function ButtonPrimary() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryLarge">Primary Large</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
    </Box>
  );
}

export function CardButton() {
  return <Button variant="card">Card Button</Button>;
}

export function ButtonOutline() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Button variant="outline">Outline</Button>
      <Button variant="mutedOutline">Outline Muted</Button>
    </Box>
  );
}

export function CloseButton() {
  return <Button variant="close">X</Button>;
}

// export function IconButton() {
//   return (
//     <Button variant="icon">
//       <MakerIcon />
//     </Button>
//   );
// }

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

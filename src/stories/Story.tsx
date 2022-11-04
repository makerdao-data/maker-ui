import { ReactNode } from 'react';
import { Box } from 'theme-ui';
import { Text } from '../components';

type StoryProps = {
  title: string;
  children: ReactNode;
};

export default function Story({ title, children }: StoryProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Text variant="heading">{title}</Text>

      <Box sx={{ marginTop: 4 }}>{children}</Box>
    </Box>
  );
}

import { ReactNode } from 'react';
declare type StoryProps = {
  title: string;
  children: ReactNode;
};
export default function Story({ title, children }: StoryProps): JSX.Element;
export {};

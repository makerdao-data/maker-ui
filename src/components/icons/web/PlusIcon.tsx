import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function PlusIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 9 9"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        d="M4.66192 5.35938H8.06036V4.20312H4.66192V0.804688H3.50567V4.20312H0.107233V5.35938H3.50567V8.75781H4.66192V5.35938Z"
        fill="currentColor"
      />
    </Svg>
  );
}

PlusIcon.displayName = '<PlusIcon />';

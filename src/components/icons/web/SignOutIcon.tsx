import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function SignOutIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H8C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15H4V5H8C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3H4ZM18 10L14 7V9L7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11L14 11V13L18 10Z"
        fill="currentColor"
      />
    </Svg>
  );
}

SignOutIcon.displayName = '<SignOutIcon />';

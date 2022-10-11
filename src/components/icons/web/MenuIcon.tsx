import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function MenuIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 18 14"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1Z"
          fill="currentColor"
        />
        <path
          d="M0 7C0 6.44772 0.447715 6 1 6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H1C0.447716 8 0 7.55228 0 7Z"
          fill="currentColor"
        />
        <path
          d="M0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447716 14 0 13.5523 0 13Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

MenuIcon.displayName = '<MenuIcon />';

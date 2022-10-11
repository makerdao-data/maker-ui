import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function EyeIcon({
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
        d="M17.5584 10.5605C17.8325 10.2314 17.8325 9.76861 17.5584 9.43948C16.4714 8.13383 13.4978 5 9.9999 5C6.50201 5 3.52845 8.13384 2.44137 9.43948C2.16733 9.76862 2.16733 10.2314 2.44137 10.5605C3.52845 11.8662 6.50201 15 9.9999 15C13.4978 15 16.4714 11.8662 17.5584 10.5605ZM10.9999 10C10.9999 10.5523 10.5522 11 9.9999 11C9.44762 11 8.9999 10.5523 8.9999 10C8.9999 9.44772 9.44762 9 9.9999 9C10.5522 9 10.9999 9.44772 10.9999 10ZM12.9999 10C12.9999 11.6569 11.6568 13 9.9999 13C8.34305 13 6.9999 11.6569 6.9999 10C6.9999 8.34315 8.34305 7 9.9999 7C11.6568 7 12.9999 8.34315 12.9999 10Z"
        fill="currentColor"
      />
    </Svg>
  );
}

EyeIcon.displayName = '<EyeIcon />';

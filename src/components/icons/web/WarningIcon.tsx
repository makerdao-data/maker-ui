import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function WarningIcon({
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
      (
      <g>
        <path
          d="M9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8V10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10V8Z"
          fill="currentColor"
        />
        <path
          d="M10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.2635 3.02335C9.03129 1.67972 10.9687 1.67972 11.7365 3.02335L18.0133 14.0078C18.7752 15.3411 17.8125 17.0001 16.2768 17.0001H3.72317C2.18753 17.0001 1.22479 15.3411 1.98668 14.0078L8.2635 3.02335ZM16.2768 15.0001L9.99999 4.01563L3.72317 15.0001L16.2768 15.0001Z"
          fill="currentColor"
        />
      </g>
      )
    </Svg>
  );
}

WarningIcon.displayName = '<WarningIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function LiquidationIcon({
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
      <g>
        <path d="M7 7H13V8H7V7Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5C3 3.34315 4.34315 2 6 2H14C15.6569 2 17 3.34315 17 5V8.3195L18 8.15283V10.1804L2 12.8471V10.8195L3 10.6528V5ZM5 10.3195L15 8.65283V5C15 4.44772 14.5523 4 14 4H6C5.44772 4 5 4.44772 5 5V10.3195Z"
          fill="currentColor"
        />
        <path
          d="M14 18C15.6569 18 17 16.6569 17 15V12.3472L15 12.6805V15C15 15.5523 14.5523 16 14 16H5V14.3472L3 14.6805V18H14Z"
          fill="currentColor"
        />
        <path d="M13 14H7.08325L13 13.0139V14Z" fill="currentColor" />
      </g>
    </Svg>
  );
}

LiquidationIcon.displayName = '<LiquidationIcon />';

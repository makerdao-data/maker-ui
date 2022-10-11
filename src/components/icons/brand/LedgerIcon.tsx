import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function LedgerIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      (
      <g>
        <path d="M5 2C3.34315 2 2 3.34315 2 5V7H7V2H5Z" fill="currentColor" />
        <path
          d="M10 2V14H22V5C22 3.34315 20.6569 2 19 2H10Z"
          fill="currentColor"
        />
        <path
          d="M22 17H17V22H19C20.6569 22 22 20.6569 22 19V17Z"
          fill="currentColor"
        />
        <path d="M14 22V17H10V22H14Z" fill="currentColor" />
        <path
          d="M7 22V17H2V19C2 20.6569 3.34315 22 5 22H7Z"
          fill="currentColor"
        />
        <path d="M2 14H7V10H2V14Z" fill="currentColor" />
      </g>
      )
    </Svg>
  );
}

LedgerIcon.displayName = '<LedgerIcon />';

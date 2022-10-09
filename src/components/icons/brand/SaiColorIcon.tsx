import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function SaiColorIcon({
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
      <g>
        <path d="M2 12L12 2L22 12L12 22L2 12Z" fill="#FDCB7F" />
        <path d="M2 12L12 2L22 12L12 16L2 12Z" fill="#FFB74D" />
        <path d="M5 12L12 5L19 12H15L12 8.99999L9 12H5Z" fill="#FCFCFC" />
      </g>
    </Svg>
  );
}

SaiColorIcon.displayName = '<SaiColorIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function SaiIcon({
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2L2 12L12 22L22 12L12 2ZM12 5L5 12H9L12 8.99999L15 12H19L12 5Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

SaiIcon.displayName = '<SaiIcon />';

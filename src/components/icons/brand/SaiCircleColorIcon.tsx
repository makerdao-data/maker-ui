import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function SaiCircleColorIcon({
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#FDC134"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6L6 12L12 18L18 12L12 6ZM12 7.8L7.8 12H10.2L12 10.2L13.8 12H16.2L12 7.8Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

SaiCircleColorIcon.displayName = '<SaiCircleColorIcon />';

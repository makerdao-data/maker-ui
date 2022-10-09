import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DepositIcon({
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
        <path
          d="M16 11C16 11.7013 15.8797 12.3744 15.6586 13C14.8349 15.3304 12.6124 17 10 17C7.38756 17 5.16508 15.3304 4.34141 13C4.12031 12.3744 4 11.7013 4 11"
          stroke="currentColor"
          strokeWidth="2"
          fillOpacity="0.0"
        />
        <rect x="2" y="10" width="16" height="2" fillOpacity="0.0" />
        <path
          d="M9.99999 14L13.4641 9.5H6.53589L9.99999 14Z"
          fill="currentColor"
        />
        <rect x="9" y="2" width="2" height="9" rx="1" fill="currentColor" />
      </g>
    </Svg>
  );
}

DepositIcon.displayName = '<DepositIcon />';

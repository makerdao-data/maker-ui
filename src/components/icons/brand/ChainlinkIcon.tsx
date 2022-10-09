import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ChainlinkIcon({
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
          d="M11.75 2L9.89815 3.05505L4.85185 5.94495L3 7V17L4.85185 18.055L9.94444 20.945L11.7963 22L13.6481 20.945L18.6481 18.055L20.5 17V7L18.6481 5.94495L13.6019 3.05505L11.75 2V2ZM6.7037 14.8899V9.11009L11.75 6.22018L16.7963 9.11009V14.8899L11.75 17.7798L6.7037 14.8899Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

ChainlinkIcon.displayName = '<ChainlinkIcon />';

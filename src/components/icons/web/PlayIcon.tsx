import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function PlayIcon({
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
          fill="currentColor"
          d="M15.5192 9.13619C16.1807 9.52207 16.1807 10.4779 15.5192 10.8638L6.50387 16.1227C5.83721 16.5116 5 16.0307 5 15.2589L5 4.74101C5 3.96922 5.83722 3.48835 6.50387 3.87723L15.5192 9.13619Z"
        />
      </g>
    </Svg>
  );
}

PlayIcon.displayName = '<PlayIcon />';

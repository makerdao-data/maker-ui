import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function YenCircleColorIcon({
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
          fill="#48495F"
        />
        <path
          d="M16 7H14.6237L12.0203 11.6273H11.9797L9.37627 7H8L11.0034 12.0844H9.09153V12.9283H11.4034V14.0534H9.09153V14.8973H11.4034V17H12.5966V14.8973H14.9085V14.0534H12.5966V12.9283H14.9085V12.0844H12.9966L16 7Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

YenCircleColorIcon.displayName = '<YenCircleColorIcon />';

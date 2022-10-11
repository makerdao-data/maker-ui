import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DigixCircleColorIcon({
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
          fill="#BB9F62"
        />
        <path
          d="M17.6569 12.0001L16.2426 13.4143L12 9.17169L7.75736 13.4143L6.34315 12.0001L12 6.34326L17.6569 12.0001Z"
          fill="white"
        />
        <path
          d="M12 17.657L15.5355 14.1214L12 10.5859L8.46447 14.1214L12 17.657Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

DigixCircleColorIcon.displayName = '<DigixCircleColorIcon />';

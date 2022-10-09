import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function BatCircleColorIcon({
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
          fill="#FF5000"
        />
        <path
          d="M12 6V9.73631L14.44 13.6116L17.9797 15.4959C18.0116 15.4449 18.007 15.3745 17.9582 15.2971L15.0679 10.7067L12.1776 6.11635C12.1286 6.03873 12.0642 6 12 6Z"
          fill="white"
        />
        <path
          d="M6.02024 15.4959L9.55997 13.6117L12.0002 9.73631V6C11.9357 6 11.8714 6.03873 11.8226 6.11627L8.93214 10.7067L6.04164 15.297C5.99302 15.3745 5.98846 15.4448 6.02024 15.4959Z"
          fill="white"
        />
        <path
          d="M17.9798 15.4958L14.4402 13.6116H9.55999L6.02026 15.4958C6.05232 15.547 6.12108 15.5788 6.21859 15.5788H17.7816C17.8792 15.5788 17.9477 15.547 17.9798 15.4958Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

BatCircleColorIcon.displayName = '<BatCircleColorIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function EtherCircleColorIcon({
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
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#667FE3"
        />
        <path d="M12 6V14.2882L8.00005 12.1113L12 6Z" fill="white" />
        <path d="M12 6L15.9999 12.1113L12 14.2882V6Z" fill="white" />
        <path
          d="M11.9999 14.9858V17.9999L8 12.81L11.9999 14.9858Z"
          fill="white"
        />
        <path
          d="M11.9999 17.9999V14.9858L16 12.81L11.9999 17.9999Z"
          fill="white"
        />
      </g>
      )
    </Svg>
  );
}

EtherCircleColorIcon.displayName = '<EtherCircleColorIcon />';

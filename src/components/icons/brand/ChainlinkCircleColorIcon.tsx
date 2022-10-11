import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ChainlinkCircleColorIcon({
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
          fill="#325CD1"
        />
        <path
          d="M12 6.08325L10.9043 6.70751L7.91847 8.41743L6.82275 9.04169V14.9586L7.91847 15.5828L10.9317 17.2928L12.0274 17.917L13.1231 17.2928L16.0816 15.5828L17.1773 14.9586V9.04169L16.0816 8.41743L13.0957 6.70751L12 6.08325V6.08325ZM9.01419 13.7101V10.2902L12 8.58028L14.9859 10.2902V13.7101L12 15.42L9.01419 13.7101Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

ChainlinkCircleColorIcon.displayName = '<ChainlinkCircleColorIcon />';

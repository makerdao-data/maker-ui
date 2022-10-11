import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function OpenInNewTabIcon({
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
          d="M13.2071 2C12.7617 2 12.5386 2.53857 12.8536 2.85355L14.2929 4.29289L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L15.7071 5.70711L17.1464 7.14645C17.4614 7.46143 18 7.23835 18 6.79289V2.5C18 2.22386 17.7761 2 17.5 2H13.2071Z"
          fill="currentColor"
        />
        <path
          d="M11.4646 5H5C3.34315 5 2 6.34315 2 8V15C2 16.6569 3.34315 18 5 18H12C13.6569 18 15 16.6569 15 15V8.53567L13 10.5357V15C13 15.5523 12.5523 16 12 16H5C4.44772 16 4 15.5523 4 15V8C4 7.44772 4.44772 7 5 7H9.4646L11.4646 5Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

OpenInNewTabIcon.displayName = '<OpenInNewTabIcon />';

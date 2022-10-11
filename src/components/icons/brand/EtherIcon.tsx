import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function EtherIcon({
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
          d="M12.0001 2V15.8138L5.50008 12.1856L12.0001 2Z"
          fill="currentColor"
        />
        <path
          d="M12.0001 2L18.5002 12.1856L12.0001 15.8138V2Z"
          fill="currentColor"
        />
        <path
          d="M12 16.9765V22.0001L5.5 13.3501L12 16.9765Z"
          fill="currentColor"
        />
        <path
          d="M12 22.0001V16.9765L18.5003 13.3501L12 22.0001Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

EtherIcon.displayName = '<EtherIcon />';

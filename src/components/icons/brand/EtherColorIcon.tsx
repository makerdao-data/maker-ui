import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function EtherColorIcon({
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
        <path d="M12 2V15.8138L5.5 12.1856L12 2Z" fill="#343434" />
        <path d="M12 2L18.5002 12.1856L12 15.814V2Z" fill="#8C8C8C" />
        <path d="M12 16.9765V22.0001L5.5 13.3501L12 16.9765Z" fill="#3C3C3B" />
        <path
          d="M12 22.0001V16.9763L18.5002 13.3501L12 22.0001Z"
          fill="#8C8C8C"
        />
        <path d="M12 15.8139L5.5 12.1855L12 9.39551V15.8139Z" fill="#141414" />
        <path d="M18.5002 12.1855L12 15.8139V9.39526" fill="#393939" />
      </g>
    </Svg>
  );
}

EtherColorIcon.displayName = '<EtherColorIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ArrowUpIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 14 8"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        d="M6.6191 0.448796C6.81878 0.213682 7.18164 0.213683 7.38132 0.448797L13.0949 7.17639C13.3707 7.50118 13.1399 8.00006 12.7138 8.00006H1.28661C0.860499 8.00006 0.62967 7.50118 0.905502 7.17639L6.6191 0.448796Z"
        fill="currentColor"
      />
    </Svg>
  );
}

ArrowUpIcon.displayName = '<ArrowUpIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ArrowDownIcon({
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
        d="M6.6191 7.5512C6.81878 7.78632 7.18164 7.78632 7.38132 7.5512L13.0949 0.823607C13.3707 0.498824 13.1399 -5.67436e-05 12.7138 -5.67436e-05H1.28661C0.860499 -5.67436e-05 0.62967 0.498824 0.905502 0.823608L6.6191 7.5512Z"
        fill="currentColor"
      />
    </Svg>
  );
}

ArrowDownIcon.displayName = '<ArrowDownIcon />';

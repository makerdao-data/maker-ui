import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function TrezorIcon({
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
          d="M16.952 8.14404H19V18.7917H18.9859L12.0002 22L5.01409 18.7917H5V8.14404H7.04892V6.64921C7.04892 4.08589 9.27077 2 12.0012 2C14.7302 2 16.952 4.08589 16.952 6.64921V8.14404ZM16.1826 17.0209V10.6424H7.81739V17.0209L12.0002 18.9373L16.1826 17.0209ZM9.58895 6.64921V8.14404H14.412V6.64921C14.412 5.4628 13.3298 4.49743 12.0012 4.49743C10.6712 4.49743 9.58895 5.4628 9.58895 6.64921Z"
          fill="currentColor"
        />
      </g>
      )
    </Svg>
  );
}

TrezorIcon.displayName = '<TrezorIcon />';

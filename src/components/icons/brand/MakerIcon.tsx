import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function MakerIcon({
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
          d="M3.55857 17.2617V9.21227L9.66296 13.8061V17.2617H11.2215V13.482C11.2215 13.1964 11.0873 12.9274 10.859 12.7556L3.45585 7.18437C2.85668 6.73348 2 7.16094 2 7.91082V17.2617H3.55857Z"
          fill="currentColor"
        />
        <path
          d="M20.4414 17.2617V9.21227L14.337 13.8061V17.2617H12.7785V13.482C12.7785 13.1964 12.9127 12.9274 13.141 12.7556L20.5442 7.18437C21.1433 6.73348 22 7.16094 22 7.91082V17.2617H20.4414Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

MakerIcon.displayName = '<MakerIcon />';

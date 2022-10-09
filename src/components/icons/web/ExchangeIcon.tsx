import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ExchangeIcon({
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
          d="M11.5192 4L13.9194 7.00018H3.99991L3 9L16 9.00018C16.3844 9.00018 16.7348 8.77984 16.9013 8.43337C17.0678 8.08691 17.021 7.67566 16.7809 7.37549L14.0805 4H11.5192Z"
          fill="currentColor"
        />
        <path
          d="M5.91953 16.0002H8.48078L6.08063 13H16.0001L17 11.0002L4.00001 11C3.6156 11 3.26523 11.2203 3.09871 11.5668C2.93219 11.9133 2.979 12.3245 3.21914 12.6247L5.91953 16.0002Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

ExchangeIcon.displayName = '<ExchangeIcon />';

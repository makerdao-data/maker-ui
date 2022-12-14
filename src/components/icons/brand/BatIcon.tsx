import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function BatIcon({
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
          d="M12 4V10.2271L16.0667 16.6859L21.9661 19.8265C22.0192 19.7414 22.0116 19.6241 21.9302 19.4951L17.1131 11.8445L12.2959 4.19391C12.2143 4.06455 12.107 4 12 4Z"
          fill="currentColor"
        />
        <path
          d="M2.03374 19.8265L7.93324 16.6861L12.0002 10.2271V4C11.8928 4 11.7857 4.06455 11.7043 4.19378L6.88687 11.8445L2.0694 19.495C1.98837 19.6241 1.98076 19.7413 2.03374 19.8265Z"
          fill="currentColor"
        />
        <path
          d="M21.9664 19.8264L16.067 16.686H7.93344L2.03394 19.8264C2.08736 19.9117 2.20196 19.9648 2.36447 19.9648H21.636C21.7986 19.9648 21.9129 19.9117 21.9664 19.8264Z"
          fill="currentColor"
        />
        <path
          d="M7.93311 16.6861H16.0668L12 10.2273L7.93311 16.6861Z"
          fillOpacity="0"
        />
      </g>
    </Svg>
  );
}

BatIcon.displayName = '<BatIcon />';

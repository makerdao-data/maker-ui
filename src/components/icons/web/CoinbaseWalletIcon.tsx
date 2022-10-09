import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function CoinbaseWalletIcon({
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
        <circle cx="10" cy="10" r="10" fill="url(#paint10_linear)" />
        <circle cx="10" cy="10" r="6" fill="white" />
        <rect x="8" y="8" width="4" height="4" rx="0.3" fill="#2058EA" />
        <defs>
          <linearGradient
            id="paint10_linear"
            x1="10"
            y1="0"
            x2="10"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2B63F6" />
            <stop offset="1" stopColor="#144CDE" />
          </linearGradient>
        </defs>
      </g>
    </Svg>
  );
}

CoinbaseWalletIcon.displayName = '<CoinbaseWalletIcon />';

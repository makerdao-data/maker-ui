import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function GovIntroIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 45 45"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          opacity="0.7"
          d="M7.95117 18.9673H36.8673V32.1207C36.8673 32.7597 36.6601 33.3826 36.1595 33.7798C34.7417 34.9047 30.9286 37.0398 22.4092 37.0398C13.8898 37.0398 10.0767 34.9047 8.65894 33.7798C8.15835 33.3826 7.95117 32.7597 7.95117 32.1207V18.9673Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M21.9239 10.0664C22.2414 9.97786 22.5771 9.97786 22.8947 10.0664L44.4881 16.0876C44.9168 16.2071 44.9326 16.8091 44.5109 16.951L22.9857 24.1951C22.6117 24.321 22.2068 24.321 21.8328 24.1951L0.30771 16.951C-0.114076 16.8091 -0.0982106 16.2071 0.330466 16.0876L21.9239 10.0664Z"
          fill="url(#paint1_linear)"
        />
        <rect
          x="43"
          y="19"
          width="1"
          height="13"
          rx="0.5"
          fill="url(#paint2_linear)"
        />
        <circle cx="43.5" cy="35.5" r="1.5" fill="url(#paint3_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="21.1183"
            y1="18.9673"
            x2="19.0828"
            y2="34.7904"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9D799" />
            <stop offset="1" stopColor="#FFA048" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="22.0425"
            y1="4.801"
            x2="25.8969"
            y2="23.8438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9D799" />
            <stop offset="1" stopColor="#FFA048" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="43.212"
            y1="21.3542"
            x2="45.9703"
            y2="21.8919"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB733" />
            <stop offset="1" stopColor="#FFA048" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="42.6359"
            y1="34.5433"
            x2="44.4204"
            y2="35.727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9D799" />
            <stop offset="1" stopColor="#FFA048" />
          </linearGradient>
        </defs>
      </g>
    </Svg>
  );
}

GovIntroIcon.displayName = '<GovIntroIcon />';

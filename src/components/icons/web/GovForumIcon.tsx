import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function GovForumIcon({
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
          opacity="0.5"
          d="M45 20C45 16.6863 42.3137 14 39 14H20C17.7909 14 16 15.7909 16 18V29.6C16 32.9137 18.6863 35.6 22 35.6H40.4688L45 41V20Z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M0 11C0 7.68629 2.68629 5 6 5H25C27.2091 5 29 6.79086 29 9V20.6C29 23.9137 26.3137 26.6 23 26.6H4.53125L0 32V11Z"
          fill="url(#paint5_linear)"
        />
        <defs>
          <linearGradient
            id="paint4_linear"
            x1="40.0156"
            y1="14.45"
            x2="20.2222"
            y2="35.2868"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACDCFF" />
            <stop offset="0.9375" stopColor="#B19DFF" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="0.906249"
            y1="7.7"
            x2="28.8695"
            y2="27.6827"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACDCFF" />
            <stop offset="0.9375" stopColor="#B19DFF" />
          </linearGradient>
        </defs>
      </g>
    </Svg>
  );
}

GovForumIcon.displayName = '<GovForumIcon />';

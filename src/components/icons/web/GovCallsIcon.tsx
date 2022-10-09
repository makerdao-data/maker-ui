import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function GovCallsIcon({
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
        <circle
          opacity="0.2"
          cx="23.5019"
          cy="24.9999"
          r="15.9999"
          fill="url(#paint6_linear)"
        />
        <circle cx="24" cy="6.99998" r="3.99998" fill="url(#paint7_linear)" />
        <circle cx="5.49998" cy="31" r="4.99998" fill="url(#paint8_linear)" />
        <circle cx="38.5" cy="37" r="5.99998" fill="url(#paint9_linear)" />
        <defs>
          <linearGradient
            id="paint6_linear"
            x1="9.80497"
            y1="17.3636"
            x2="34.236"
            y2="36.2404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BBF2E3" />
            <stop offset="1" stopColor="#00E777" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="20.5758"
            y1="5.0909"
            x2="26.6835"
            y2="9.8101"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#90F6E3" />
            <stop offset="1" stopColor="#6FCBB5" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="1.21969"
            y1="28.6136"
            x2="8.85439"
            y2="34.5126"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BBF2E3" />
            <stop offset="1" stopColor="#83D9C9" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="33.3636"
            y1="34.1364"
            x2="42.5253"
            y2="41.2151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBFFD0" />
            <stop offset="1" stopColor="#00D9E7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </g>
    </Svg>
  );
}

GovCallsIcon.displayName = '<GovCallsIcon />';

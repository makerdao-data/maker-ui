import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function LrcCircleColorIcon({
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#1C42FF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9454 11.6426H18V11.6732L10.1054 16.4888L14.0233 13.3567L12.9454 11.6426ZM9.9974 7V16.5524L6 13.3567L9.9974 7Z"
            fill="white"
          />
        </svg>
      </g>
    </Svg>
  );
}

LrcCircleColorIcon.displayName = '<LrcCircleColorIcon />';

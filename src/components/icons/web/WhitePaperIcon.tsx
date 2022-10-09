import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function WhitePaperIcon({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 7C6 5.89543 6.89543 5 8 5H15C16.1046 5 17 5.89543 17 7V16C17 17.1046 16.1046 18 15 18H8C6.89543 18 6 17.1046 6 16V7ZM15 7H8V16H15V7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4C3 2.89543 3.89543 2 5 2H13V4L5 4V14H3V4Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

WhitePaperIcon.displayName = '<WhitePaperIcon />';

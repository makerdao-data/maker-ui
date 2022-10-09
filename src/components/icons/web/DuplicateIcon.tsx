import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DuplicateIcon({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4 5.34315 5.34315 4 7 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H7C4.23858 2 2 4.23858 2 7V14C2 14.5523 2.44772 15 3 15C3.55228 15 4 14.5523 4 14V7ZM5 16C5 17.1046 5.89543 18 7 18H14C15.1046 18 16 17.1046 16 16V11V9.5C16 9.23478 15.8946 8.98043 15.7071 8.79289L12.2071 5.29289C12.0196 5.10536 11.7652 5 11.5 5H10H7C5.89543 5 5 5.89543 5 7V16ZM14 16V11H11C10.4477 11 10 10.5523 10 10V7H7V16H14Z"
        fill="currentColor"
      />
    </Svg>
  );
}

DuplicateIcon.displayName = '<DuplicateIcon />';

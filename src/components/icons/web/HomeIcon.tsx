import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function HomeIcon({
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
        d="M18 7.95543L9.99993 1.73315L2 7.95532V10.489L9.99993 4.26688L18 10.4892V7.95543ZM3 16V10.9783L5 9.42276V16H7V13C7 12.4478 7.44772 12 8 12H12C12.5523 12 13 12.4478 13 13V16H15V9.42261L17 10.9782V16C17 17.1046 16.1046 18 15 18H12C11.4477 18 11 17.5523 11 17V14H9V17C9 17.5523 8.55228 18 8 18H5C3.89543 18 3 17.1046 3 16Z"
        fill="currentColor"
      />
    </Svg>
  );
}

HomeIcon.displayName = '<HomeIcon />';

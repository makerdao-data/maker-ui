import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function SendIcon({
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
        d="M17.1056 10.4472L2.72361 17.6382C2.39116 17.8044 2 17.5627 2 17.191V11.5L9 9.99998L2 8.74998V2.80899C2 2.4373 2.39116 2.19556 2.72361 2.36178L17.1056 9.55276C17.4741 9.73703 17.4741 10.2629 17.1056 10.4472Z"
        fill="currentColor"
      />
    </Svg>
  );
}

SendIcon.displayName = '<SendIcon />';

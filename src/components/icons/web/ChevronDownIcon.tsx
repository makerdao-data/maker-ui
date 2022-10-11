import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ChevronDownIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 14 9"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.12117 0.7072C1.73064 0.316676 1.09748 0.316676 0.706956 0.7072C0.316431 1.09772 0.316431 1.73089 0.706956 2.12141L6.36381 7.77827C6.37601 7.79047 6.38845 7.80229 6.40112 7.81374C6.41063 7.82233 6.42026 7.8307 6.43002 7.83887C6.8229 8.16772 7.40894 8.14755 7.77813 7.77836L13.435 2.12151C13.8255 1.73098 13.8255 1.09782 13.435 0.707293C13.0445 0.316769 12.4113 0.316769 12.0208 0.707293L7.07102 5.65705L2.12117 0.7072Z"
        fill="currentColor"
      />
      )
    </Svg>
  );
}

ChevronDownIcon.displayName = '<ChevronDownIcon />';

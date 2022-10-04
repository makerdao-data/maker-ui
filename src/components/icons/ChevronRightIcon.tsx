import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from './Svg';

export default function ChevronRightIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 8 14"
      enableBackground="new 0 0 8 14"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.707107C0.683417 0.316583 1.31658 0.316583 1.70711 0.707107L6.65685 5.65685L7.36396 6.36396C7.75448 6.75448 7.75449 7.38765 7.36396 7.77817L6.65685 8.48528L1.70711 13.435C1.31658 13.8256 0.683418 13.8256 0.292893 13.435C-0.0976314 13.0445 -0.0976307 12.4113 0.292893 12.0208L5.24264 7.07107L0.292893 2.12132C-0.097631 1.7308 -0.097631 1.09763 0.292893 0.707107Z"
        fill="currentColor"
      />
    </Svg>
  );
}

ChevronRightIcon.displayName = '<ChevronRightIcon />'
import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from './Svg';

export default function ChevronLeftIcon({
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
        d="M7.70711 0.707107C7.31658 0.316583 6.68342 0.316583 6.29289 0.707107L1.34315 5.65685L0.636039 6.36396C0.245515 6.75448 0.245515 7.38765 0.636039 7.77817L1.34315 8.48528L6.29289 13.435C6.68342 13.8256 7.31658 13.8256 7.70711 13.435C8.09763 13.0445 8.09763 12.4113 7.70711 12.0208L2.75736 7.07107L7.70711 2.12132C8.09763 1.7308 8.09763 1.09763 7.70711 0.707107Z"
        fill="currentColor"
      />
    </Svg>
  );
}

ChevronLeftIcon.displayName = '<ChevronLeftIcon />'
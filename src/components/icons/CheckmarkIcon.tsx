import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from './Svg';

export default function CheckmarkIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 16 14"
      enableBackground="new 0 0 16 14"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8096 1.0476C15.3356 1.49471 15.3995 2.28358 14.9524 2.80959L6.45244 12.8096C6.21697 13.0866 5.87255 13.2474 5.50898 13.25C5.14541 13.2526 4.79872 13.0968 4.5593 12.8232L1.0593 8.82316C0.604694 8.30361 0.657341 7.51391 1.17689 7.0593C1.69643 6.6047 2.48614 6.65735 2.94074 7.17689L5.4863 10.0861L13.0476 1.19046C13.4947 0.664455 14.2836 0.600493 14.8096 1.0476Z"
        fill="currentColor"
      />
    </Svg>
  );
}

CheckmarkIcon.displayName = '<CheckmarkIcon />'
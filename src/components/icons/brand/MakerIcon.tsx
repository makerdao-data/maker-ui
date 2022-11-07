import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function MakerIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 38 20"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.1722 4.34633V19.2972H0.277344V1.92904C0.277344 0.536229 1.86853 -0.257728 2.98141 0.579758L16.732 10.9276C17.1559 11.2467 17.4053 11.7464 17.4053 12.2769V19.2972H14.5104V12.8788L3.1722 4.34633Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.8122 4.34633V19.2972H37.707V1.92904C37.707 0.536229 36.1158 -0.257728 35.003 0.579758L21.2524 10.9276C20.8285 11.2467 20.5791 11.7464 20.5791 12.2769V19.2972H23.474V12.8788L34.8122 4.34633Z"
          fill={color}
        />
      </g>
    </Svg>
  );
}

MakerIcon.displayName = '<MakerIcon />';

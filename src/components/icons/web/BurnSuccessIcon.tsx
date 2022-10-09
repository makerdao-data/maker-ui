import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function BurnSuccessIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 119 119"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g fill="none">
        <circle cx="59.5" cy="61.5" r="50.5" fill="#F75524" />
        <circle cx="59.5" cy="59.5" r="58" stroke="#1AAB9B" strokeWidth="3" />
        <path
          d="M78.3852 56.5501C77.8798 58.8584 76.6699 60.9037 74.9926 62.4731C72.9431 50.6107 65.1374 50.7562 65.1374 39.8253C65.1374 37.3417 65.4205 34.9444 65.9104 32.6431C54.9707 35.1541 46.6951 46.8112 46.6951 60.8338C46.6951 62.0937 46.7649 63.3346 46.8954 64.552C44.9952 62.0188 43.8693 58.8889 43.8693 55.4986C43.8693 53.4877 44.2752 51.5714 44.9926 49.8133C39.7768 53.8371 36.4146 60.0777 36.4146 67.1017C36.4146 78.3249 44.9694 87.5758 56.0158 88.9146C53.6709 87.1012 52.0945 83.7833 52.0945 79.9806C52.0945 74.2363 56.518 67.9182 58.7808 60.2582C61.0462 67.8572 68.1028 74.2363 68.1028 79.9806C68.1028 83.3462 66.8657 86.3305 64.9558 88.2315C74.3024 85.596 81.1431 77.138 81.1431 67.1011C81.1425 63.273 80.1407 59.6806 78.3852 56.5501Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

BurnSuccessIcon.displayName = '<BurnSuccessIcon />';

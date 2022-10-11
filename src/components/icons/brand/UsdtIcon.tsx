import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function UsdtIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        d="M22 11.7472C22 10.4861 18.5685 9.43389 14.0084 9.19114L14.0081 7.18179H19.7019V3H4.13268V7.18179H9.82602V9.20097C5.34899 9.46036 2 10.5016 2 11.7472C2 12.993 5.34899 14.0342 9.82602 14.2932V21.5087H14.0081V14.303C18.5685 14.0608 22 13.0083 22 11.7472ZM12 12.9895C7.10533 12.9895 3.13734 12.232 3.13734 11.2969C3.13734 10.5052 5.98259 9.84051 9.82602 9.65557V10.1321H9.82646V12.085C10.5194 12.1239 11.2476 12.1442 12 12.1442C12.6927 12.1442 13.3654 12.1266 14.0085 12.0944V9.64831C17.9352 9.82192 20.8627 10.4936 20.8627 11.2969C20.8627 12.232 16.8946 12.9895 12 12.9895Z"
        fill="currentColor"
      />
    </Svg>
  );
}

UsdtIcon.displayName = '<UsdtIcon />';

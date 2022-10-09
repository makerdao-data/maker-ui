import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function EditIcon({
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
      (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0206 2.70708C16.6301 2.31655 15.9969 2.31655 15.6064 2.70708L6.41398 11.8995L5.70688 14.0208L7.8282 13.3137L17.0206 4.12129C17.4111 3.73077 17.4111 3.0976 17.0206 2.70708ZM4 2.99997H10H12L10 4.99997H4V16H15V9.99997L17 7.99997L17 9.99997V16C17 17.1045 16.1046 18 15 18H4C2.89543 18 2 17.1045 2 16V4.99997C2 3.8954 2.89543 2.99997 4 2.99997Z"
        fill="currentColor"
      />
      )
    </Svg>
  );
}

EditIcon.displayName = '<EditIcon />';

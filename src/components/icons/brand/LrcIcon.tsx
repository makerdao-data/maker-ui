import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function LrcIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5757 11.7377H22V11.7886L8.8423 19.8146L15.3721 14.5945L13.5757 11.7377ZM8.66233 4V19.9206L2 14.5945L8.66233 4Z"
        fill="currentColor"
      />
    </Svg>
  );
}

LrcIcon.displayName = '<LrcIcon />';

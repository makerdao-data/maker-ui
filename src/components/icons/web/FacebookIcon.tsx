import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function FacebookIcon({
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
      <g>
        <path
          d="M18 17.1169C18 17.6046 17.6046 18 17.117 18H13.0397V11.804H15.1194L15.4309 9.38929H13.0397V7.84764C13.0397 7.14852 13.2338 6.6721 14.2364 6.6721L15.515 6.67154V4.51179C15.2939 4.48236 14.5349 4.41662 13.6518 4.41662C11.8082 4.41662 10.5461 5.54194 10.5461 7.6085V9.38929H8.46098V11.804H10.5461V18H2.88308C2.39522 18 2 17.6045 2 17.1169V2.88307C2 2.39528 2.39529 2 2.88308 2H17.117C17.6047 2 18 2.39528 18 2.88307V17.1169Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

FacebookIcon.displayName = '<FacebookIcon />';

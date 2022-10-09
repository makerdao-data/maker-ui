import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ReviewFailedIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M15.1502 44.8496C13.9786 43.6781 13.9786 41.7786 15.1502 40.607L40.606 15.1511C41.7776 13.9796 43.6771 13.9796 44.8487 15.1511C46.0202 16.3227 46.0202 18.2222 44.8487 19.3938L19.3928 44.8496C18.2212 46.0212 16.3217 46.0212 15.1502 44.8496Z"
          fill="#F75524"
        />
        <path
          d="M44.8487 44.8496C43.6771 46.0212 41.7776 46.0212 40.606 44.8496L15.1502 19.3938C13.9786 18.2222 13.9786 16.3227 15.1502 15.1511C16.3217 13.9796 18.2212 13.9796 19.3928 15.1511L44.8487 40.607C46.0202 41.7786 46.0202 43.6781 44.8487 44.8496Z"
          fill="#F75524"
        />
      </g>
    </Svg>
  );
}

ReviewFailedIcon.displayName = '<ReviewFailedIcon />';

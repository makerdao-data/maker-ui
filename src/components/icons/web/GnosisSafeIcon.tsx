import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function GnosisSafeIcon({
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
          d="M10 0C4.48696 0 0 4.46957 0 10C0 15.513 4.46956 20 10 20C15.5304 20 20 15.5304 20 10C20 4.48696 15.513 0 10 0ZM17.3217 10.5391H12.6783C12.3652 12.0696 10.887 13.0609 9.35652 12.7478C7.82609 12.4348 6.83478 10.9565 7.14783 9.42608C7.46087 7.89565 8.93913 6.90435 10.4696 7.21739C11.6348 7.44348 12.5217 8.38261 12.713 9.56522H17.3217C17.6 9.56522 17.8087 9.7913 17.8087 10.0522C17.8087 10.3304 17.5826 10.5391 17.3217 10.5391Z"
          fill="black"
        />
      </g>
    </Svg>
  );
}

GnosisSafeIcon.displayName = '<GnosisSafeIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function SearchIcon({
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
      {...props}>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.36355 8.36379C9.84339 6.88395 9.84339 4.48465 8.36355 3.00481C6.88371 1.52497 4.48441 1.52497 3.00457 3.00481C1.52473 4.48465 1.52473 6.88395 3.00457 8.36379C4.48441 9.84363 6.88371 9.84363 8.36355 8.36379ZM9.70329 9.70354C11.9231 7.48378 11.9231 3.88483 9.70329 1.66507C7.48353 -0.554697 3.88458 -0.554696 1.66482 1.66507C-0.554941 3.88483 -0.554941 7.48378 1.66482 9.70354C3.88458 11.9233 7.48353 11.9233 9.70329 9.70354Z"
          fill={color}
        />
        <path
          d="M7.69368 9.03367L9.03342 7.69392L13.7225 12.383C14.0925 12.753 14.0925 13.3528 13.7225 13.7228C13.3526 14.0927 12.7527 14.0927 12.3828 13.7228L7.69368 9.03367Z"
          fill={color}
        />
      </g>
    </Svg>
  );
}

SearchIcon.displayName = '<SearchIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function MagnifyingGlassIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 38 38"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.8433 22.439C26.7939 18.4883 26.7939 12.0831 22.8433 8.13243C18.8926 4.18179 12.4874 4.18179 8.53673 8.13243C4.58609 12.0831 4.58609 18.4883 8.53673 22.439C12.4874 26.3896 18.8926 26.3896 22.8433 22.439ZM26.4199 26.0156C32.3459 20.0896 32.3459 10.4818 26.4199 4.5558C20.4939 -1.37016 10.8861 -1.37016 4.9601 4.5558C-0.965866 10.4818 -0.965866 20.0896 4.9601 26.0156C10.8861 31.9416 20.4939 31.9416 26.4199 26.0156Z"
          fill="currentColor"
        />
        <path
          d="M21.0549 24.2273L24.6316 20.6507L37.1498 33.1689C38.1375 34.1565 38.1375 35.7578 37.1498 36.7455C36.1621 37.7332 34.5608 37.7332 33.5732 36.7455L21.0549 24.2273Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

MagnifyingGlassIcon.displayName = '<MagnifyingGlassIcon />';

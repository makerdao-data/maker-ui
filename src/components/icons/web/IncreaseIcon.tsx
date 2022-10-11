import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function IncreaseIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 8 8"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M2.59178 1.14842C2.59178 0.928378 2.77016 0.75 2.9902 0.75H7.3728V1.54684H2.9902C2.77016 1.54684 2.59178 1.36846 2.59178 1.14842Z"
          fill="currentColor"
        />
        <path
          d="M6.97438 5.53102C6.75434 5.53102 6.57597 5.35264 6.57597 5.1326L6.57597 0.75L7.3728 0.75V5.1326C7.3728 5.35264 7.19442 5.53102 6.97438 5.53102Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.85769 1.26511C7.01328 1.4207 7.01328 1.67297 6.85769 1.82856L1.67825 7.008C1.52266 7.16359 1.27039 7.16359 1.1148 7.008C0.95921 6.85241 0.95921 6.60014 1.1148 6.44455L6.29424 1.26511C6.44983 1.10952 6.7021 1.10952 6.85769 1.26511Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

IncreaseIcon.displayName = '<IncreaseIcon />';

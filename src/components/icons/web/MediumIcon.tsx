import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function MediumIcon({
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
      <g>
        <rect width="19.2343" height="15.27" fill="black" fillOpacity="0" />
        <rect width="19.2343" height="15.27" fill="black" fillOpacity="0" />
        <rect width="19.2343" height="15.27" fill="black" fillOpacity="0" />
        <path d="M2.28082 3.11504C2.30472 2.87893 2.21468 2.64556 2.03837 2.48665L0.242449 0.323175V0H5.81879L10.129 9.45286L13.9184 0H19.2343V0.323175L17.6988 1.79541C17.5664 1.89632 17.5008 2.06217 17.5282 2.22631V13.0437C17.5008 13.2078 17.5664 13.3737 17.6988 13.4746L19.1984 14.9468V15.27H11.6555V14.9468L13.209 13.4387C13.3617 13.2861 13.3617 13.2412 13.3617 13.0078V4.26411L9.04247 15.2341H8.45879L3.43021 4.26411V11.6163C3.38828 11.9254 3.49094 12.2366 3.70858 12.4602L5.72899 14.9109V15.2341H0V14.9109L2.02041 12.4602C2.23646 12.2363 2.33314 11.923 2.28082 11.6163V3.11504Z" />
      </g>
    </Svg>
  );
}

MediumIcon.displayName = '<MediumIcon />';

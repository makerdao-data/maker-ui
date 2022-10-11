import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DecreaseIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 8 7"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M6.97438 1.90227C7.19442 1.90227 7.3728 2.08065 7.3728 2.30069L7.3728 6.68329L6.57597 6.68329L6.57597 2.30069C6.57597 2.08065 6.75434 1.90227 6.97438 1.90227Z"
          fill="currentColor"
        />
        <path
          d="M2.59178 6.28487C2.59178 6.06483 2.77016 5.88645 2.9902 5.88645L7.3728 5.88645L7.3728 6.68329L2.9902 6.68329C2.77016 6.68329 2.59178 6.50491 2.59178 6.28487Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.85769 6.16818C6.7021 6.32377 6.44983 6.32377 6.29424 6.16818L1.1148 0.988736C0.959209 0.833144 0.959209 0.58088 1.1148 0.425288C1.27039 0.269695 1.52266 0.269695 1.67825 0.425288L6.85769 5.60473C7.01328 5.76032 7.01328 6.01258 6.85769 6.16818Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

DecreaseIcon.displayName = '<DecreaseIcon />';

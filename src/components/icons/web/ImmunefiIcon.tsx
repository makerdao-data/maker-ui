import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ImmunefiIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 22 19"
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
          d="M5.4793 7.71484L11.305 13.6451L17.0684 7.77819L21.794 12.5885L16.3035 18.1776L14.8911 16.7781L19.0067 12.5885L17.0684 10.6154L11.305 16.4824L5.4793 10.5522L3.5646 12.5012L7.74287 16.7545L6.33042 18.154L0.777344 12.5012L5.4793 7.71484Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.092 10.5526L11.2663 4.62236L5.50293 10.4893L0.777344 5.67886L6.26782 0.0898438L7.68026 1.48933L3.5646 5.67886L5.50293 7.652L11.2663 1.78505L17.092 7.71529L19.0067 5.76618L14.8285 1.51293L16.2409 0.113436L21.794 5.76618L17.092 10.5526Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3945 18.039V14.3027H12.2969V18.039H10.3945Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3945 3.96479V0.228516H12.2969V3.96479H10.3945Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

ImmunefiIcon.displayName = '<ImmunefiIcon />';

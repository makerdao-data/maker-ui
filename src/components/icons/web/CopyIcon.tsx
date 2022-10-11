import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function CopyIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 14 14"
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
          d="M2.80039 4.59961C2.80039 3.71595 3.51674 2.99961 4.40039 2.99961H10.0004C10.884 2.99961 11.6004 3.71595 11.6004 4.59961V11.7996C11.6004 12.6833 10.884 13.3996 10.0004 13.3996H4.40039C3.51674 13.3996 2.80039 12.6833 2.80039 11.7996V4.59961ZM10.0004 4.59961H4.40039V11.7996H10.0004V4.59961Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.400391 2.19961C0.400391 1.31595 1.11674 0.599609 2.00039 0.599609H8.40039V2.19961L2.00039 2.19961V10.1996H0.400391V2.19961Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

CopyIcon.displayName = '<CopyIcon />';

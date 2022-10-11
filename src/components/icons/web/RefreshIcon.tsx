import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function RefreshIcon({
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
          d="M16.4027 12.8308C17.8352 9.60108 16.6285 5.74433 13.4999 3.93801C12.0464 3.09885 10.4171 2.84018 8.88035 3.09007L9.40171 5.03581C10.4393 4.90998 11.525 5.10722 12.4999 5.67007C14.6706 6.92333 15.546 9.55847 14.6566 11.8227L13.321 11.0516L13.696 15.5983L17.821 13.6497L16.4027 12.8308Z"
          fill="currentColor"
        />
        <path
          d="M6.49986 16.0624C3.37124 14.2561 2.1645 10.3993 3.59707 7.16957L2.17871 6.35067L6.30371 4.40212L6.67871 8.94875L5.34313 8.17765C4.45369 10.4419 5.32915 13.0771 7.49986 14.3303C8.47475 14.8932 9.56039 15.0904 10.598 14.9646L11.1194 16.9103C9.58266 17.1602 7.95333 16.9015 6.49986 16.0624Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

RefreshIcon.displayName = '<RefreshIcon />';

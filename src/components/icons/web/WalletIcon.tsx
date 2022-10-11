import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function WalletIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 15 15"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M9.375 8.90625C9.375 8.1296 10.0046 7.5 10.7812 7.5C11.5579 7.5 12.1875 8.1296 12.1875 8.90625C12.1875 9.6829 11.5579 10.3125 10.7812 10.3125C10.0046 10.3125 9.375 9.6829 9.375 8.90625Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.34375 0C1.04933 0 0 1.04933 0 2.34375C0 2.44114 0.00593975 2.53714 0.0174766 2.63141C0.00600927 2.69 0 2.75055 0 2.8125V13.125C0 14.1605 0.839467 15 1.875 15H13.125C14.1605 15 15 14.1605 15 13.125V4.6875C15 3.65197 14.1605 2.8125 13.125 2.8125H12.1875V0.9375C12.1875 0.419733 11.7678 0 11.25 0H2.34375ZM10.3125 1.875H2.34375C2.08487 1.875 1.875 2.08487 1.875 2.34375C1.875 2.60263 2.08487 2.8125 2.34375 2.8125H10.3125V1.875ZM1.875 4.6875V13.125H13.125V4.6875H1.875Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
}

WalletIcon.displayName = '<WalletIcon />';

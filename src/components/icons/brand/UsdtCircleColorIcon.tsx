import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function UsdtCircleColorIcon({
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
        <circle cx="12" cy="12" r="10" fill="#27A17B" />
        <path
          d="M18.0056 12.2283C18.0056 11.4745 15.9545 10.8456 13.2289 10.7005L13.2287 9.49951H16.6319V7H7.326V9.49951H10.729V10.7064C8.05301 10.8615 6.05127 11.4838 6.05127 12.2283C6.05127 12.9729 8.05301 13.5953 10.729 13.7501V18.0629H13.2287V13.756C15.9545 13.6112 18.0056 12.9821 18.0056 12.2283ZM12.0284 12.9709C9.1028 12.9709 6.73107 12.5181 6.73107 11.9592C6.73107 11.486 8.43172 11.0887 10.729 10.9781V11.263H10.7293V12.4302C11.1434 12.4535 11.5787 12.4656 12.0284 12.4656C12.4424 12.4656 12.8446 12.4551 13.2289 12.4358V10.9738C15.576 11.0776 17.3258 11.479 17.3258 11.9592C17.3257 12.5181 14.954 12.9709 12.0284 12.9709Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

UsdtCircleColorIcon.displayName = '<UsdtCircleColorIcon />';

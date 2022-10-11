import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function TelegramIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 20 17"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.4943 1.54763L16.5441 15.9738C16.3215 16.992 15.7411 17.2454 14.9162 16.7657L10.4211 13.3311L8.25204 15.4941C8.01201 15.743 7.81126 15.9512 7.34865 15.9512L7.6716 11.2043L16.0029 3.39841C16.3651 3.06355 15.9244 2.87802 15.4399 3.21288L5.14035 9.93726L0.706292 8.49826C-0.258202 8.18602 -0.275659 7.4982 0.907047 7.01853L18.2505 0.0905301C19.0535 -0.221705 19.7561 0.276061 19.4943 1.54763Z"
      />
    </Svg>
  );
}

TelegramIcon.displayName = '<TelegramIcon />';

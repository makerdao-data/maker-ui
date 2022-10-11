import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function EuroCircleColorIcon({
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
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#003AC6"
        />
        <path
          d="M15 7.15204C14.7211 7.0622 14.0679 7 13.5688 7C11.2202 7 9.16514 8.18176 8.58532 10.566H7V11.3953H8.45321C8.43119 11.5888 8.42385 11.7961 8.42385 12.0035C8.42385 12.197 8.43119 12.3836 8.44587 12.5701H7V13.3994H8.57798C9.14312 15.7975 11.1982 17 13.5688 17C14.0679 17 14.7211 16.9447 15 16.8549V15.7422C14.7064 15.8252 14.0679 15.8666 13.5688 15.8666C11.8367 15.8666 10.4642 15.0304 9.97982 13.3994H13.9431V12.5701H9.81835C9.79633 12.3905 9.78899 12.2039 9.78899 12.0104C9.78899 11.7961 9.80367 11.5888 9.82569 11.3953H13.9431V10.566H9.9945C10.4936 8.96268 11.8587 8.1472 13.5688 8.1472C14.0679 8.1472 14.7064 8.20249 15 8.2716V7.15204Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

EuroCircleColorIcon.displayName = '<EuroCircleColorIcon />';

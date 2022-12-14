import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function DeleteIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 16 16"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C5 0.447715 5.44772 0 6 0H10C10.5523 0 11 0.447715 11 1C11 1.55228 10.5523 2 10 2H6C5.44772 2 5 1.55228 5 1ZM0 4C0 3.44772 0.447715 3 1 3H2H14H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H14V12C14 14.2091 12.2091 16 10 16H6C3.79086 16 2 14.2091 2 12V5H1C0.447715 5 0 4.55228 0 4ZM4 5V12C4 13.1046 4.89543 14 6 14H10C11.1046 14 12 13.1046 12 12V5H4ZM6 7.5C6 7.22386 6.22386 7 6.5 7C6.77614 7 7 7.22386 7 7.5V11.5C7 11.7761 6.77614 12 6.5 12C6.22386 12 6 11.7761 6 11.5V7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5V11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5V7.5C10 7.22386 9.77614 7 9.5 7Z"
        fill="currentColor"
      />
    </Svg>
  );
}

DeleteIcon.displayName = '<DeleteIcon />';

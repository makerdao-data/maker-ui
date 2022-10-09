import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ClockIcon({
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
        d="M13.3846 8C13.3846 10.9738 10.9738 13.3846 8 13.3846C5.02616 13.3846 2.61538 10.9738 2.61538 8C2.61538 5.02616 5.02616 2.61538 8 2.61538C10.9738 2.61538 13.3846 5.02616 13.3846 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM7.5 9C7.22386 9 7 8.77614 7 8.5V4.5C7 4.22386 7.22386 4 7.5 4C7.77614 4 8 4.22386 8 4.5V8H11.5C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H7.5Z"
        fill="currentColor"
      />
    </Svg>
  );
}

ClockIcon.displayName = '<ClockIcon />';

import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function CompoundIcon({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80266 17.5873C4.30461 17.2826 4 16.7402 4 16.1576V12.9047C4 12.7802 4.03335 12.6602 4.09561 12.5534C4.28905 12.2199 4.71817 12.1065 5.05168 12.3021L12.3935 16.5822C12.8226 16.8335 13.0872 17.2916 13.0872 17.7896V21.1603C13.0872 21.3137 13.0449 21.4671 12.9649 21.5983C12.7225 21.9941 12.2067 22.1186 11.8109 21.8762L4.80266 17.5873ZM15.7464 11.4105C16.1755 11.6618 16.4401 12.1199 16.4401 12.6179V19.4571C16.4401 19.6595 16.3311 19.8462 16.1555 19.9441L14.5479 20.849C14.5279 20.8602 14.5057 20.869 14.4835 20.8757V17.0781C14.4835 16.5867 14.2256 16.1309 13.8031 15.8774L7.35516 12.0198V7.733C7.35516 7.60848 7.38851 7.48842 7.45076 7.3817C7.6442 7.04818 8.07333 6.93479 8.40684 7.13045L15.7464 11.4105ZM18.9593 6.35892C19.3906 6.60794 19.6552 7.07042 19.6552 7.56847V17.5584C19.6552 17.7629 19.5418 17.9519 19.3617 18.0497L17.8386 18.8724V11.9175C17.8386 11.4262 17.5807 10.9725 17.1605 10.719L10.5702 6.76581V2.69915C10.5702 2.57464 10.6036 2.45457 10.6636 2.34785C10.8571 2.01433 11.2862 1.90094 11.6197 2.09438L18.9593 6.35892Z"
        fill="currentColor"
      />
    </Svg>
  );
}

CompoundIcon.displayName = '<CompoundIcon />';

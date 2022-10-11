import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function CloseIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 12 12"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5355 10.9497C9.92602 11.3402 10.5592 11.3402 10.9497 10.9497C11.3402 10.5592 11.3402 9.92602 10.9497 9.5355L7.4143 6.00008L10.9498 2.46458C11.3403 2.07406 11.3403 1.44089 10.9498 1.05037C10.5593 0.659843 9.9261 0.659843 9.53558 1.05037L6.00008 4.58587L2.46443 1.05022C2.07391 0.659693 1.44074 0.659693 1.05022 1.05022C0.659693 1.44074 0.659693 2.07391 1.05022 2.46443L4.58587 6.00008L1.0503 9.53565C0.659775 9.92617 0.659775 10.5593 1.0503 10.9499C1.44082 11.3404 2.07399 11.3404 2.46451 10.9499L6.00008 7.41429L9.5355 10.9497Z"
        fill="currentColor"
      />
    </Svg>
  );
}

CloseIcon.displayName = '<CloseIcon />';

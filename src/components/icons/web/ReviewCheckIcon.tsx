import { SVGProps } from 'react';
import { BoxProps } from 'theme-ui';
import Svg from '../Svg';

export default function ReviewCheckIcon({
  width = 56,
  height = 56,
  color = 'currentColor',
  ...props
}: BoxProps & SVGProps<SVGSVGElement>) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
      enableBackground="new 0 0 14 9"
      width={width + 'px'}
      height={height + 'px'}
      fill={color}
      {...props}
    >
      <g>
        <path
          d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM3 30C3 44.9117 15.0883 57 30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30Z"
          fill="#1AAB9B"
        />
        <circle cx="30" cy="30" r="25" fill="#1AAB9B" />
        <path
          d="M26.6857 39.3573L26.0412 38.7613L17.7215 31.0668C17.321 30.6964 17.2912 30.0734 17.6545 29.6666L18.9432 28.2235C19.3142 27.808 19.9531 27.7757 20.364 28.1517L27.3806 34.5699L39.6153 22.7129C40.0187 22.322 40.6648 22.3399 41.0459 22.7526L42.3376 24.1512C42.706 24.5501 42.6887 25.1701 42.2987 25.5479L28.6915 38.7301L28.0605 39.3414C27.6791 39.7108 27.0755 39.7178 26.6857 39.3573Z"
          fill="white"
        />
      </g>
    </Svg>
  );
}

ReviewCheckIcon.displayName = '<ReviewCheckIcon />';

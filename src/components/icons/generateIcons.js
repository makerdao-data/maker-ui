const fs = require('fs');

const icons = {
  dots: {
    path: `<path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4Z"
            fill="currentColor"
          />`,
    viewBox: '0 0 16 4'
  }
};

function toPascalCase(str) {
  return (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('');
}

function generateIcons() {
  const componentName = toPascalCase(Object.keys(icons)[0]);
  const iconData = icons.dots;

  const componentTemplate = `
    import { SVGProps } from 'react';
    import { BoxProps } from 'theme-ui';
    import Svg from './Svg';
    
    export default function ${componentName}Icon({
      width = 56,
      height = 56,
      color = 'currentColor',
      ...props
    }: BoxProps & SVGProps<SVGSVGElement>) {
      return (
        <Svg
          x="0px"
          y="0px"
          viewBox="${iconData.viewBox}"
          enableBackground="new 0 0 14 9"
          width={width + 'px'}
          height={height + 'px'}
          fill={color}
          {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.12117 0.7072C1.73064 0.316676 1.09748 0.316676 0.706956 0.7072C0.316431 1.09772 0.316431 1.73089 0.706956 2.12141L6.36381 7.77827C6.37601 7.79047 6.38845 7.80229 6.40112 7.81374C6.41063 7.82233 6.42026 7.8307 6.43002 7.83887C6.8229 8.16772 7.40894 8.14755 7.77813 7.77836L13.435 2.12151C13.8255 1.73098 13.8255 1.09782 13.435 0.707293C13.0445 0.316769 12.4113 0.316769 12.0208 0.707293L7.07102 5.65705L2.12117 0.7072Z"
            fill="currentColor"
          />
        </Svg>
      );
    }
    
    ${componentName}Icon.displayName = '<${componentName}Icon />'
    `;

  fs.writeFileSync('src/components/icons/' + componentName + 'Icon.tsx', componentTemplate);
}

generateIcons();
export default function Svg({
  children,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}>
      {children}
    </svg>
  );
}

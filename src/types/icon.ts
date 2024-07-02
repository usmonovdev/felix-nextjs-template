import { SVGProps } from "react";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

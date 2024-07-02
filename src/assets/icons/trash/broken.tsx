import { colors } from "@/constants";
import { IIconProps } from "@/types/icon";
import { FC } from "react";

export const Broken: FC<IIconProps> = ({
  className,
  width = 25,
  height = 24,
  color = colors.black,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14001"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.85 9.14001L18.2 19.21"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3301 16.5H13.6601"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8201 12.5H14.5001"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 12.5H10.33"
        stroke={props.stroke || color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
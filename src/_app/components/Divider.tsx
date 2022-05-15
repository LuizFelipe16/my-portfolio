import { HTMLAttributes, ReactNode } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  style: string | undefined | any;
}

export const Divider = (
  {
    style,
    ...rest
  }: DividerProps
) => (
  <hr className={style} {...rest} />
);

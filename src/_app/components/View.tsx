import { HTMLAttributes, ReactNode } from "react";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  style: string | undefined | any;
  children: ReactNode;
}

export const View = (
  {
    children,
    style,
    ...rest
  }: ViewProps
) => (
  <div className={style} {...rest}>
    {children}
  </div>
);

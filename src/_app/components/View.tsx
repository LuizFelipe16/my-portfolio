import { HTMLAttributes, ReactNode } from "react";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  type?: 'div' | 'main';
}

export const View = (
  {
    children,
    style,
    type = 'div',
    ...rest
  }: ViewProps
) => {
  if (type === 'main') {
    return (
      <main className={style} {...rest}>
        {children}
      </main>
    )
  } else {
    return (
      <div className={style} {...rest}>
        {children}
      </div>
    )
  }
};

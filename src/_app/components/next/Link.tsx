import NLink from "next/link";
import type { LinkProps as NLinkProps } from "next/link";
import { ReactNode, PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren<NLinkProps> {
  children?: ReactNode;
  text?: string;
  style?: string | undefined | any;
}

export const Link = (
  {
    style,
    children,
    text,
    ...rest
  }: LinkProps
) => (
  <NLink passHref {...rest}>
    <a className={style}>
      {!text ? children : text}
    </a>
  </NLink>
);

import { HTMLAttributes } from "react";

interface Text extends HTMLAttributes<HTMLParagraphElement> { }

interface Text extends HTMLAttributes<HTMLHeadingElement> { }

interface TextProps extends Text {
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  style?: string | undefined | any;
}

export const Text = (
  {
    style,
    type = 'p',
    text,
    ...rest
  }: TextProps
) => {
  if (type === 'p') return <p className={style} {...rest}>{text}</p>
  else if (type === 'h1') return <h1 className={style} {...rest}>{text}</h1>
  else if (type === 'h2') return <h2 className={style} {...rest}>{text}</h2>
  else if (type === 'h3') return <h3 className={style} {...rest}>{text}</h3>
  else if (type === 'h4') return <h4 className={style} {...rest}>{text}</h4>
  else if (type === 'h5') return <h5 className={style} {...rest}>{text}</h5>
  else if (type === 'h6') return <h6 className={style} {...rest}>{text}</h6>
  else return <span className={style}>Type not found</span>
};

import { ItemNavStyles } from "./styles";
import { scroller } from 'react-scroll';

interface IItemNavProps {
  text: string;
  href: string;
}

export function ItemNav({ href, text }: IItemNavProps) {
  const scrollToElementById = () => scroller.scrollTo(href, {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutQuint',
  });

  return (
    <ItemNavStyles
      onClick={scrollToElementById}
    >
      {text}
      <hr />
    </ItemNavStyles>
  );
}
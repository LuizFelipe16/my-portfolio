import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";
import { ItemNavStyles } from "../styles";

interface IItemNavProps {
  text: string;
  href: string;
}

export function ItemNav({ href, text }: IItemNavProps) {
  const scroll = () => scrollAnimationToSessionPageById(href);

  return (
    <ItemNavStyles
      onClick={scroll}
    >
      {text}
      <hr />
    </ItemNavStyles>
  );
}
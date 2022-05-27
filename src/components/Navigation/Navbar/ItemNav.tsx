import Link from 'next/link';
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";
import { ItemNavStyles, ItemLinkNavStyles } from "../styles";

interface IItemNavProps {
  text: string;
  href: string;
  isPage?: boolean;
}

export function ItemNav({ href, text, isPage = false }: IItemNavProps) {
  const scroll = () => scrollAnimationToSessionPageById(href);

  if (isPage === true) {
    return (
      <Link href={`/${href}`} passHref>
        <ItemLinkNavStyles>
          {text}
          <hr />
        </ItemLinkNavStyles>
      </Link>
    );
  } else {
    return (
      <ItemNavStyles onClick={scroll}>
        {text}
        <hr />
      </ItemNavStyles>
    );
  }
}
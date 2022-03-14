import { ItemNavStyles } from "./styles";

interface IItemNavProps {
  text: string;
}

export function ItemNav({ text }: IItemNavProps) {
  return (
    <ItemNavStyles>
      {text}
      <hr />
    </ItemNavStyles>
  );
}
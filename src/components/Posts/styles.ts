import styled from 'styled-components';

const stylesConfig = `
  color: var(--gray-50);
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;

  transition: 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 0rem;
    height: 0.2rem;
    margin-top: 10px;
    background: #fff;
    border-radius: 5rem;
    border: none;

    transition: 0.2s;
  }

  &:hover {
    color: var(--cyan-500);
    hr {
      background: var(--cyan-500);
      width: 100%;
    }
  }
`

const ItemNavStyles = styled.button`
  ${stylesConfig}
`;
const ItemLinkNavStyles = styled.a`
  ${stylesConfig}
`;

export { ItemNavStyles, ItemLinkNavStyles };
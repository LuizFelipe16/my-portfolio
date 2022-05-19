import styled from 'styled-components';

const ItemNavStyles = styled.button`
  color: var(--gray-50);
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;

  // text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

  transition: 0.2s;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 0rem;
    height: 0.15rem;
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
`;

export { ItemNavStyles };
import styled from 'styled-components';

export const MenuTools = styled.div`
  width: 5rem;
  height: auto;

  bottom: 1.5rem;
  right: 1rem;
  
  z-index: 1000;
  position: fixed;

  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button-tool {
    width: 3rem;
    height: 3rem;

    background-color: var(--cyan-500);
    color: var(--gray-900);

    border-radius: 100%;

    animation: menu_open 1s normal both;
    transition: 0.2s;

    &:hover {
      background-color: var(--cyan-500);
      filter: brightness(0.9);
    }
  }

  @keyframes menu_open {
    from {
      margin-bottom: -10rem;
    }
    to {
      margin-bottom: 0rem;
    }
  }
`;
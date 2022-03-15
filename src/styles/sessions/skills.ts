import styled from 'styled-components';

export const Skills = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  padding: 2rem;
  padding-top: 6rem;
  background-color: var(--gray-100);

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  position: relative;

  .item-skill {
    transition: 1s !important;
  }

  h1 {
    font-family: 'JetBrains Mono', monospace;
    color: var(--gray-900);
    font-weight: 400;
    font-size: 1.5rem;
    position: absolute;
  }

  .line {
    width: 2px;
    height: 95%;
    background: var(--gray-900);
    border-radius: 3px;
    border: none;
    margin-top: 3rem;

    position: relative;

    > div {
      width: 1rem;
      height: 1rem;
      position: absolute;
      border-radius: 100%;
      background: var(--cyan-500);
      margin-top: 7rem;
      left: -7px;

      & + div {
        margin-top: 18rem;

        & + div {
          margin-top:  30rem;

          & + div {
            margin-top: 43rem;
          }
        }
      }
    }
  }
`;
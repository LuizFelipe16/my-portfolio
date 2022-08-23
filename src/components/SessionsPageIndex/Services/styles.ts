import styled from 'styled-components';

export const Services = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  background-color: var(--gray-900);

  background-image: url('/images/services-bg.png');
  object-fit: cover;
  position: relative;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* gap: 2rem; */

  > div {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    > h1 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--cyan-500);
      font-weight: 400;
      font-size: 2rem;
    }

    > h2 {
      font-family: 'Nunito', sans-serif;
      color: var(--gray-100);
      font-weight: 100;
      font-size: 1.1rem;
      letter-spacing: 0.15rem;
    }
  }

  .services {
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      background-image: none;

      padding: 1.2rem;
      gap: 2rem;

      .services {
        flex-direction: column;
      }
    }
  }
`;
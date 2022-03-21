import styled from 'styled-components';

export const ItemPortfolioStyle = styled.div`
  width: 25rem;
  height: 30rem;

  padding: 1rem;

  background-color: var(--gray-900);
  border-color: var(--gray-900);
  border-width: 1px;
  border-radius: 1rem;
  margin: none !important;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  
  transition: 1s !important;
  animation: blinker_neon 4s infinite both;
  
  &:hover {
    opacity: 1;
    background-color: var(--gray-800);
  }

  @keyframes blinker_neon {
    0% {
      border-color: var(--gray-900);
    }
    25% {
      border-color: var(--cyan-500);
    }
    50% {
      border-color: var(--cyan-500);
    }
    75% {
      border-color: var(--cyan-500);
    }
    100% {
      border-color: var(--gray-900);
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    color: var(--cyan-500);
  }
  
  > p {
    width: 100%;
    height: 10rem;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 200;
    line-height: 1.5rem;
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      width: 100%;
      height: auto;
    }
  }
`;
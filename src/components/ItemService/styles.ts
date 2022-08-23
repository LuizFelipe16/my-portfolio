import styled from 'styled-components';

export const ItemServiceStyle = styled.div`
  width: 24rem;
  height: 23rem;

  padding: 2rem;
  opacity: 0.8;
  background-color: var(--gray-900);
  border-color: var(--gray-900);
  border-width: 1px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  
  transition: 2s !important;
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
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    color: var(--cyan-500);
  }
  
  p {
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    line-height: 1.7rem;
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      width: 100%;
      height: auto;

      h1 {
        font-size: 1.7rem;
      }
      
      p {
        width: 100%;
      }
    }
  }
`;
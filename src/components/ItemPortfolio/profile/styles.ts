import styled from 'styled-components';

export const ItemPortfolioStyle = styled.div`
  width: 25rem;
  height: 25rem;

  padding: 1rem;
  font-family: 'Montserrat', sans-serif;

  background-color: var(--gray-700);
  border-color: var(--gray-900);
  border-width: 1px;
  border-radius: 1rem;
  margin: none !important;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  overflow: hidden;
  
  transition: 1s !important;
  animation: blinker_neon 4s infinite both;
  
  .img-design-profile {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border: 2px solid var(--cyan-500);

    transition: 0.5s;
    
    &:hover {
      transform: scale(1.1);
    }
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

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      width: 100%;
      height: auto;
    }
  }
`;
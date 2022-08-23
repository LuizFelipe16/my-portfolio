import styled from 'styled-components';

export const ItemPortfolioStyle = styled.div`
  width: 25rem;
  min-height: 25rem;
  height: auto;

  padding: 1rem;

  background-color: var(--gray-900);
  border-color: var(--gray-900);
  border-width: 1px;
  border-radius: 1rem;
  margin: 0 !important;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
  
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

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
    color: var(--cyan-500);
  }
  
  > .previewContent {
    width: 100%;
    height: 8rem;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5rem;
    background: -webkit-linear-gradient(#eee, #171923);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px #3331);
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      width: 100%;
      height: auto;
    }
  }
`;
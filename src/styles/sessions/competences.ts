import styled from 'styled-components';

export const Competences = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  background-color: var(--gray-900);

  /* background-image: url('/images/services-bg.png'); */
  object-fit: cover;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  div {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    animation: circle 3s infinite both;
    
    .icon {
    width: 6.5rem;
    height: 6.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    
      > img {
        width: 90%;
        height: 90%;
        border-radius: 1rem;
        object-fit: contain;
      }
  
    }
  }

  @keyframes circle {
    0% {
      margin-right: 0rem;
      margin-bottom: -2rem;
    }
    25% {
      margin-left: 2rem;
    }
    50% {
      margin-left: 0rem;
      margin-top: -2rem;
    }
    75% {
      margin-right: 2rem;
      margin-top: 0rem;
    }
    100% {
      margin-right: 0rem;
      margin-bottom: -2rem;
    }
  }
`;
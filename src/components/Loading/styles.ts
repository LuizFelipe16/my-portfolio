import styled from 'styled-components';

export const LoadingStyle = styled.div`
  width: 100vw;
  height: 100vh;
  
  /* background-image: url('/images/loading-bg.png'); */
  object-fit: cover;
  background-color: var(--gray-900);

  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text-loading {
    animation: blinker 1s infinite both;
  }

  @keyframes blinker {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
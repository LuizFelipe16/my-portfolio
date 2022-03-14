import styled from 'styled-components';

export const Welcome = styled.main`
  width: 100vw;
  min-height: 100vh;
  
  background-image: url('/images/home2-bg.png');
  object-fit: cover;

  position: relative;

  .content {
    width: 47rem;
    height: 100%;

    right: 0;
    padding: 0.5rem;
    
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    /* border: 1px solid red; */

    .title-gradient {
      animation: entry_title 6s normal both;
    }

    @keyframes entry_title {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    h1 {
      font-family: 'JetBrains Mono', monospace;
      z-index: 10000;
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--cyan-500);

      border-right: 2px solid white;
      white-space: nowrap;
      overflow: hidden;

      animation: blinkCursor 0.8s steps(40) infinite normal, typing 6s steps(40) 1s infinite both;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 43rem;
      }
    } 

    @keyframes blinkCursor {
      from {
        border-right-color: white;
      }
      to {
        border-right-color: transparent;
      }
    }
  }
`;
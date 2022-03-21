import styled from 'styled-components';

export const Welcome = styled.main`
  width: 100vw;
  min-height: 100vh;
  
  background-image: url('/images/home3-bg.png');
  object-fit: cover;

  position: relative;

  .img-d-element {
    background: transparent;
    position: absolute;
    object-fit: cover;
    left: 60px;
    top: 100px;
  }

  .content {
    width: 47rem;
    height: 100%;

    right: 0;
    padding: 0.5rem;
    
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

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

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      /* background-image: none; */
      background-image: url('/images/welcome-bg.png');
      
      .img-d-element {
        display: none;
        /* position: relative; */
        left: 70px;
        top: 40px;
        width: 31rem;
      }
      
      .content {
        /* margin-top: 15rem; */
        /* padding-left: 3rem; */
        width: 100%;
        position: relative;

        justify-content: center;
        align-items: center;

        > h1 {
          font-size: 1rem;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        } 
      }
    }
  }
`;


// .back-video {
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   min-width: 100%;
//   min-height: 100%;
//   width: auto;
//   height: auto;
//   z-index: -100;
// }
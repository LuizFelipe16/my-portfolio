import styled from 'styled-components';

const widthContentTexts = '37rem'
const myDebugger = '1px solid red'

export const valueLeftContentTexts = '70px'

export const Entry = styled.main`
  width: 100vw;
  min-height: 100vh;
  
  /* background-image: url('/images/home3-bg.png'); */
  /* object-fit: cover; */

  position: relative;

  .img-d-element {
    background: transparent;
    position: absolute;
    object-fit: cover;
    left: 60px;
    top: 100px;
  }

  .element-3d {
    width: 65%;
    height: 100vh;

    position: absolute;
    right: -20px;
    top: 0;
    /* border: ${myDebugger}; */
  }
  
  .content {
    width: ${widthContentTexts};
    height: 100%;

    z-index: 100;

    left: ${valueLeftContentTexts};
    top: 0;
    padding: 0.5rem;
    /* border: ${myDebugger}; */
    
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
      font-size: 1.5rem;
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
        width: ${widthContentTexts};
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

    .access-button {
      font-family: 'Montserrat', monospace;
      color: var(--gray-100);
      font-size: 1.3rem;
      font-weight: 600;
      border-radius: 9999px;

      padding: 1.5rem 5rem;
      margin-top: 3.5rem;

      border: 1px solid var(--cyan-500)
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

      .element-3d {
        display: none;
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

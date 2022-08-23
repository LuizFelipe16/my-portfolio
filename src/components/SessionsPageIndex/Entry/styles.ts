import styled from 'styled-components';
import { styledPresets } from '../../../_app';

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
    width: 60%;
    height: 100vh;

    background-color: transparent !important;
    
    position: absolute;
    right: -20px;
    top: 0;
    /* border: ${myDebugger}; */
  }

  .loading-element-3d {
    width: 65%;
    height: 100vh;

    background-color: transparent !important;
    position: absolute;
    right: -20px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
      color: var(--cyan-500);
      font-size: 1.2rem;
      font-weight: 400;
      border-radius: 9999px;

      padding: 1.5rem 4rem;
      background-color: var(--gray-800);
      margin-top: 3.5rem;
      
      /* border: 1px solid var(--cyan-500); */
      border-color: var(--gray-900);
      border-width: 1px;

      gap: 1.5rem;
      
      transition: 0.3s;
      animation: blinker_neon 4s infinite both;

      &:hover {
        margin-left: 0.5rem;
        background-color: var(--gray-900);
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
    }
  }

  @media (min-width: 325px) and (max-width: 979px) {
    & {
      .content {
        > h1 {
          animation: none;
        }
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

      .element-3d {
        display: none;
      }
      
      .content {
        /* margin-top: 15rem; */
        /* padding-left: 3rem; */
        width: 100%;
        position: relative;

        left: 0;
        right: 0;
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
            width: 95%;
          }
        } 
      }
    }
  }
`;

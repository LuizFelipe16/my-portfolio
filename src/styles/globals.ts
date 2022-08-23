import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --white: #fff;

    --gray-900: #171923;
    --gray-800: #1A202C;
    --gray-700: #2D3748;
    --gray-600: #4A5568;
    --gray-300: #B3B5C6;
    --gray-200: #B3B5C6;
    --gray-100: #D1D2DC;
    --gray-80: #E1E1E6;
    --gray-50: #fff;


    --purple-900: #5429cc;
    --purple-800: #44337A;
    --purple-700: #553C9A;
    --purple-600: #6B46C1;
    --purple-500: #805AD5;
    --purple-400: #9F7AEA;
    --purple-300: #B794F4;

    --cyan-500: #48CDD0;

    --swiper-navigation-size: 22px;
    --swiper-navigation-color: var(--cyan-500);
    
    --swiper-pagination-color: var(--cyan-500);
    /* --swiper-pagination-bullet-size: 8px;
    --swiper-pagination-bullet-width: 8px;
    --swiper-pagination-bullet-height: 8px;
    --swiper-pagination-bullet-inactive-color: #000;
    --swiper-pagination-bullet-inactive-opacity: 0.2;
    --swiper-pagination-bullet-opacity: 1;
    --swiper-pagination-bullet-horizontal-gap: 4px;
    --swiper-pagination-bullet-vertical-gap: 6px; */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    overflow-x: hidden;
    background-color: var(--gray-900);
  }

  button {
    cursor: pointer;
  }

  div {
    display: flex;
  }

  .text-italic {
    font-style: italic;
  }

  .p {
    padding: 0.3rem;
  }

  .flex-dir-column {
    flex-direction: column;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: var(--gray-900);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--cyan-500);
    border-radius: 2rem;
  }
`;
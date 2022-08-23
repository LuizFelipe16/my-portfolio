import styled from 'styled-components';
import { styledPresets as theme } from '../../_app';

const postBorder = 12

export const Posts = styled.div`
  width: 100vw;
  min-height: 120vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  
  background-color: transparent;
  /* padding: 2rem; */
  color: var(--white);
  
  .goBack {
    cursor: pointer;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding: 2rem;

    > h1 {
      color: var(--cyan-500);
      font: 500 1.6rem 'Montserrat', sans-serif;
      margin-top: 4rem;
      z-index: 100;

      .icon {
        margin-right: 0.5rem;
      }
    }
    
    > p {
      font: 200 1.1rem 'Nunito', sans-serif;
      margin-top: 1rem;
      z-index: 100;
    }
  }

  .posts {
    width: 100%;
    gap: 2rem;
    margin-top: ${theme.spacing.size(2)};
    z-index: 100;
    ${theme.row.centerStart};
    ${theme.padding.vertical.p1};
  }

  .footer-copyright {
    bottom: 0;
    left: 0;
  }

  .backPage {
    color: var(--cyan-500);
    font-size: ${theme.font.size(1.8)};
    opacity: 0.5;
    position: absolute;
    top: 20px;
    left: 20px;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
  
  @media (min-width: 320px) and (max-width: 968px) {
    .container {
      .illustration {
        display: none;
      }
    
      .content {
        width: 100%;
        height: auto;
      }
    }

    .posts {
      width: 100%;
      ${theme.column.centerStart};
      ${theme.padding.vertical.p1};
    }
  }
`

export const Post = styled.div`
  min-width: 18rem;
  max-width: 22rem;
  min-height: 12rem;

  opacity: 0.8;
  padding-bottom: 1rem;
  background: var(--gray-700);
  border-top-width: 3px;
  border-radius: ${postBorder}px;
  border-color: var(--cyan-500);
  animation: blinker_neon 4s infinite both;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;

  transition: 1s;
  transition: 0.2s margin-top;

  &:hover {
    opacity: 1;
    margin-top: -2px;
  }

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-top-left-radius: ${postBorder / 2}px;
    border-top-right-radius: ${postBorder / 2}px;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 0 1.2rem 0 1.2rem;
    gap: 0.75rem;
    ${theme.column.startStart}

    h1 {
      font: 500 1.2rem 'Montserrat', sans-serif;
    }

    p {
      height: 7rem;
      font: 500 1rem 'Nunito', sans-serif;
      line-height: 1.2rem;
      overflow: hidden;
      margin-top: 0.5rem;

      background: -webkit-linear-gradient(#eee, #3331);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(1px 1px #3331);
    }

    a {
      width: 100%;
      font-family: 'Montserrat', monospace;
      color: var(--cyan-500);
      font-size: 0.9rem;
  
      ${theme.centerRow}

      &:hover { text-decoration: underline; }
    }
  } 
`
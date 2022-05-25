import styled from 'styled-components';
import { styledPresets as theme } from '../../_app';

export const Posts = styled.div`
  width: 100vw;
  min-height: 100vh;

  ${theme.column.startStart};
  position: relative;
  
  background-color: var(--gray-900);
  padding: 2rem;
  color: var(--white);

  > h1 {
    color: var(--cyan-500);
    font: 500 1.6rem 'Montserrat', sans-serif;
    margin-top: 2.5rem;
  }
  
  > p {
    font: 200 1rem 'Montserrat', sans-serif;
    margin-top: 1rem;
  }
  
  .posts {
    width: 100%;
    gap: 2rem;
    margin-top: ${theme.spacing.size(2.5)};
    ${theme.row.centerStart};
    ${theme.padding.vertical.p1};
  }

  .backPage {
    color: var(--cyan-500);
    font-size: ${theme.font.size(1.8)};
    position: absolute;
    opacity: 0.5;
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
      
        padding: 2rem;
      }
    }

    .posts {
      width: 100%;
      padding: 2rem;
    }
  }
`

export const Post = styled.div`
  width: 17rem;
  min-height: 12rem;
  max-width: 24rem;

  padding-bottom: 1rem;
  background: var(--gray-700);
  border-top-width: 3px;
  border-color: var(--cyan-500);
  animation: blinker_neon 4s infinite both;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;

  transition: 0.3s;

  &:hover {
    background-color: var(--gray-800);
  }

  img {
    width: 100%;
    height: 9rem;
    object-fit: cover;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 0 1.2rem 0 1.2rem;
    gap: 0.75rem;
    ${theme.column.startStart}

    h1 {
      font: 400 1.1rem 'Montserrat', sans-serif;
    }

    p {
      height: 5rem;
      font: 300 0.9rem 'Montserrat', sans-serif;
      line-height: 1.1rem;
      overflow: hidden;

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
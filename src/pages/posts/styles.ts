import styled from 'styled-components';
import { styledPresets } from '../../_app';

export const Posts = styled.div`
  width: 100vw;
  min-height: 100vh;

  ${styledPresets.column.centerStart}
  position: relative;

  background-color: var(--gray-900);
  padding: 2rem;
  color: var(--white);

  .backPage {
    color: var(--cyan-500);
    padding: 0.5rem 1.6rem;
    border-radius: 9999px;
    border: 1px solid var(--cyan-500);
    background-color: var(--gray-800);
    font: 400 1rem 'Montserrat', sans-serif;
    position: absolute;
    letter-spacing: 1px;
    top: 25px;
    left: 25px;
    transition: 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
  
  .posts {
    width: 100%;
    gap: 2rem;
    
    color: var(--cyan-500);

    margin-top: ${styledPresets.spacing.size(2.5)};
    padding: ${styledPresets.spacing.size(1)};

    ${styledPresets.centerRow};
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
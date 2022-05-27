import styled from 'styled-components';
import { styledPresets as theme } from '../../_app';

export const Spaces = styled.div`
  width: 100vw;
  min-height: 100vh;

  ${theme.column.centerStart}
  position: relative;

  background-color: var(--gray-900);
  padding: 2rem;
  color: var(--white);

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

  > h1 {
    font: 400 2rem 'Montserrat', sans-serif;
    margin-top: 2.5rem;
    text-align: center;
  }
  
  > p {
    font: 200 0.9rem 'Montserrat', sans-serif;
    margin-top: 1.2rem;
    text-align: center;
  }
  
  .spaces {
    width: 100%;
    gap: 2rem;
    
    color: var(--cyan-500);

    margin-top: ${theme.spacing.size(2.5)};
    padding: ${theme.spacing.size(1)};

    ${theme.centerRow};
  }
  
  @media (min-width: 200px) and (max-width: 968px) {
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

    .spaces {
      width: 100%;
      padding: 0.5rem;
    }
  }
`
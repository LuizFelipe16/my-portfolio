import styled from 'styled-components';
import { styledPresets as theme } from '../../../../_app';

export const ViewHeader = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;

  background: var(--gray-900);
  ${theme.column.startStart}

  > .banner {
    width: 100%;
    opacity: 0.3;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  > .content {
    width: 80%;
    height: 90vh;
    padding: 0 11rem 0 11rem;
    gap: 30px;
    ${theme.column.startCenter}

    > h1 {
      color: var(--white);
      opacity: 1;
      z-index: 10;
      font: 300 3rem 'Montserrat', sans-serif;
    }

    > h1 strong {
      font-weight: 500;
    }

    > p {
      color: var(--white);
      font: 300 1.2rem 'Montserrat', sans-serif;
      opacity: 0.8;
    }
  }

  @media (min-width: 200px) and (max-width: 968px) {
    & {
      justify-content: center;
      align-items: flex-start;

      .banner {
        width: 100%;
        height: 100vh;
        opacity: 0.1;
        object-fit: cover;

        /* display: none; */
      }
      
      .content {
        width: 100%;
        height: auto;
        
        padding: 2rem;

        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
`;

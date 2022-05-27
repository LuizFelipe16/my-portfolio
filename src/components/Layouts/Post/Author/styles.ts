import styled from 'styled-components';
import { styledPresets as theme } from '../../../../_app';

export const ViewAuthor = styled.div`
  width: 35rem;
  min-height: 10rem;

  margin-top: 3.5rem;

  color: var(--gray-900);
  padding: 1.2rem 3.2rem 1.2rem 3.2rem;
  border-radius: 0.5rem 50% 0.5rem 0.5rem;

  background: var(--cyan-500);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  gap: 2.5rem;
  ${theme.row.centerStart}
      
  img {
    width: 12rem;
    height: 11rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 3px solid var(--cyan-500);
    border-radius: 0.5rem 50% 0.5rem 0.5rem;
    object-fit: cover;
    margin-left: -6.5rem;
  }

  .author_content {
    ${theme.column.startCenter}

    h1 {
      font-size: 1.2rem;
    }
        
    p {
      font-weight: bold;
      font-size: 2rem;
    }
        
    .social {
      width: 2rem;
      border-radius: 0.25rem;
      padding: 0.25rem;
      background: var(--gray-900);
      color: var(--cyan-500);
      margin-top: 1.2rem;
            
      a {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 200px) and (max-width: 968px) {
    & {
      width: 100%;
      min-height: 20rem;
      margin-top: 3rem;

      padding: 1rem;
      padding-bottom: 2.5rem !important;
      border-radius: 0rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;

      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;

      img {
        margin-top: -3rem;
        margin-left: 0;
        border-radius: 1rem;
      }

      .social {
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

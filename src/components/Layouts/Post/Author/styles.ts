import styled from 'styled-components';
import { styledPresets as theme } from '../../../../_app';

export const ViewAuthor = styled.div`
  width: auto;
  min-width: 15rem;
  min-height: 8rem;

  margin-top: 3rem;

  color: var(--gray-900);
  padding: 1.2rem 3.2rem 1.2rem 3.2rem;
  border-radius: 0.5rem 9999px 9999px 0.5rem;

  background: var(--cyan-500);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  gap: 1.5rem;
  ${theme.row.centerStart}
      
  img {
    width: 8rem;
    height: 8rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 3px solid var(--cyan-500);
    border-radius: 9990px;
    object-fit: cover;
    margin-left: -6.5rem;
  }

  .author_content {
    ${theme.column.startCenter}

    h1 {
      font-size: 1rem;
    }
        
    p {
      font-weight: bold;
      font-size: 1.3rem;
    }
        
    .social {
      width: auto;
      border-radius: 0.25rem;
      padding: 0.2rem;
      background: var(--gray-900);
      color: var(--cyan-500);
      margin-top: 0.6rem;
            
      a {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 200px) and (max-width: 968px) {
    & {
      /* width: 100%; */
      /* min-height: 20rem; */
      margin-top: 3rem;
      margin-bottom: 3rem;

      padding: 1rem;
      padding-bottom: 2.5rem !important;
      border-radius: 1rem;
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

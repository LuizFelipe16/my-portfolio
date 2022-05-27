import styled from 'styled-components';
import { styledPresets } from '../../../_app';

export const Post = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .post {
    width: 100vw;
    height: auto;
    min-height: 30rem;

    padding: 5rem 1.5rem 5rem 1.5rem;
    background: var(--gray-900);
    color: var(--white);

    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .post_content {
      width: 80%;
      min-height: 30rem;
      color: var(--cyan-500);
      padding: 3.5rem 3.2rem;
      border-radius: 0.8rem;
      background: var(--gray-900);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      margin-top: -8rem;
      z-index: 10;
      ${styledPresets.column.startStart}
      gap: 1.2rem;

      .post_title {
        color: var(--cyan-500);
        font: 600 2.5rem 'Montserrat', sans-serif;
      }

      .post_subtitle {
        color: var(--white);
        font: 400 1.2rem 'Montserrat', sans-serif;
        margin-bottom: 1.6rem;
      }

      > hr {
        width: 100%;
        height: 0.2rem;
        background: var(--cyan-500);
        opacity: 0.2;
        border-radius: 100%;
        border: none;
      }

      .post_information {
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        color: var(--cyan-500);
        font: 300 1rem 'Montserrat', sans-serif;

        > h2 {
          ${styledPresets.centerRow}
          gap: 0.5rem;
        }
        
        > time {
          ${styledPresets.centerRow}
          gap: 0.5rem;
        }
      }

      .body_post {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
    
        margin-top: 2rem;
    
        > h1 {
          color: var(--white);
          font: bold 1.7rem 'Montserrat';
    
          margin-bottom: 1.35rem !important;
        }
    
        .postContent {
          color: var(--white);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          line-height: 1.95rem !important;
          font-family: 'Montserrat';
          text-align: justify;
          font-size: 1.1rem;
        }
      }
    }
  }

  @media (min-width: 200px) and (max-width: 968px) {
    .post {
      margin-top: 2.5rem;
      border-radius: 0 0 0 0;
      padding: 0;
      
      .post_content {
        width: 100%;
        min-height: 30rem;
        border-radius: 0 0 0 0;
        
        padding: 1.8rem !important;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
    
        .post_title {
          font: 600 2rem 'Montserrat', sans-serif;
        }
    
        .post_subtitle {
          font: 400 1rem 'Montserrat', sans-serif;
        }
    
        > hr {
          width: 100%;
        }
    
        .post_information {
          width: 100%;
    
          > h2 {
            font: 300 1rem 'Montserrat', sans-serif;
          }
          
          > time {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
`;

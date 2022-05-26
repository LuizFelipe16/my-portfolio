import styled from 'styled-components';
import { styledPresets } from '../../../_app';

export const Post = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .container {
    width: 100vw;
    height: auto;
    min-height: 100vh;

    background: var(--gray-900);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > .illustration {
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
    
      display: flex;
      gap: 30px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      > h1 {
        color: #fff;
        opacity: 1;
        z-index: 10;
        font: 300 3rem 'Montserrat', sans-serif;
      }

      > h1 strong {
        font-weight: 500;
      }

      > p {
        color: #fff;
        font: 300 1.2rem 'Montserrat', sans-serif;
        opacity: 0.8;
      }
    }
  }

  .back_page {
    top: 50px;
    left: 80px;
    position: absolute;

    border: 1px solid var(--gray-900);
    background: var(--gray-900);
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    
    z-index: 100;
    
    color: #fff;
    font-size: 1.8rem;
    
    transition: 0.2s;
    cursor: pointer;
    
    &:hover {
      border: 1px solid var(--cyan-500);
      transform: scale(1.1);
      color: var(--cyan-500);
    }
  }

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
    }

    .author {
      width: 28rem;
      min-height: 10rem;

      color: var(--gray-900);
      padding: 1.2rem 3.2rem 1.2rem 3.2rem;
      border-radius: 0.5rem 50% 0.5rem 0.5rem;

      background: var(--cyan-500);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 2.5rem;
      
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

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

  .options_post_link {
    left: 0;
    top: 28%;
  }

  .options_post_insta {
    left: 0;
    top: 38%;
  }

  .options_post {
    width: auto;
    height: auto;

    padding: 0.7rem;
    z-index: 10000;
    position: fixed;

    border-radius: 0 0.8rem 0.8rem 0;
    background: var(--cyan-500);
    color: var(--gray-900);
    border: 1px solid var(--cyan-500);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.2s;

    &:hover {
      background-color: var(--gray-900);
      color: var(--cyan-500);
    }
  }

  @media (min-width: 320px) and (max-width: 968px) {
    .container {
      justify-content: center;
      align-items: flex-start;

      .illustration {
        width: 100%;
        height: 100%;

        display: none;
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
    
    .back_page {
      top: 20px;
      left: 30px;
    }

    .author {
      width: 100%;
      min-height: 20rem;
      margin-top: 3rem;

      padding: 0 0 0 0 !important;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;

      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;

      img {
        margin-top: -3rem;
        margin-left: 0;
      }

      .social {
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .post {
      margin-top: 0rem;
      border-radius: 0 0 0 0;
    
      .content {
        width: 100%;
        min-height: 30rem;

        padding: 0 0 0 0 !important;
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

    .options_post {
      display: none;
    }
  }
`;

import styled from 'styled-components';

export const About = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  background-color: var(--gray-900);

  background-image: url('/images/about-bg.png');
  object-fit: cover;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 16rem;
    height: 16rem;

    position: absolute;
    object-fit: cover;
    background-color: var(--gray-900);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    right: 500px;

    border-radius: 100%;
    border-left: 10px solid var(--cyan-500);
    border-right: 10px solid var(--cyan-500);
    border-top: 10px solid var(--gray-900);
    border-bottom: 10px solid var(--gray-900);

    transition: 0.2s;
    animation: blinker_circle 3s infinite both;
  }

  @keyframes blinker_circle {
    0% {
      margin-right: 0rem;
      margin-bottom: -7rem;
    }
    25% {
      margin-left: 7rem;
    }
    50% {
      margin-left: 0rem;
      margin-top: -7rem;
    }
    75% {
      margin-right: 7rem;
      margin-top: 0rem;
    }
    100% {
      margin-right: 0rem;
      margin-bottom: -7rem;
    }
  }

  .infos {
    width: 36rem;
    height: 100%;
    padding-left: 4rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: center;

    h2 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--cyan-500);
      font-weight: 100;
      font-size: 1.4rem;
    }

    .text-info {
      font-family: 'Montserrat', sans-serif;
      color: var(--white);
      font-weight: 300;
      font-size: 1rem;
      
      margin-bottom: 5rem;
    }

    .tec-skills {
      width: 100vw;
      height: 6rem;

      position: absolute;
      bottom: -35px;
      left: 0;

      /* border: 1px solid red; */

      flex-direction: row;
      gap: 5rem;
      padding-left: 3rem;
      padding-right: 3rem;
      align-items: center;
      justify-content: space-around;

      > div {
        width: 6.5rem;
        height: 6.5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 1rem;
        /* background-color: var(--gray-900); */

        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        > img {
          width: 90%;
          height: 90%;
          border-radius: 1rem;
          object-fit: contain;
        }
      }
    }

    .quote {
      font-size: 2rem !important;
    }
  }

  .about {
    width: 31rem;
    height: auto;
    padding-right: 7.8rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: center;

    > h1 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--cyan-500);
      font-weight: bold;
      font-size: 2.8rem;
    }

    > p {
      font-family: 'Montserrat', sans-serif;
      color: var(--white);
      font-weight: 300;
      font-size: 1rem;
    }
  }

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 8rem;

      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 4rem;

      > img {
        position: static;
        animation: none;
        right: none;
      }

      .infos {
        width: 100%;
        /* border: 1px solid red; */
        align-items: center;
        margin-left: 0 !important;
        margin: 0 !important;
        padding-left: 0 !important;
        text-align: center;
        /* display: none; */

        > div {
          text-align: center;
        }

        .tec-skills {
          height: auto;
          flex-direction: column !important;
        }

        .quote {
          /* display: none; */
          font-size: 1rem !important;
        }
      }

      .about {
        width: 100% !important;
        /* border: 1px solid red; */
        padding-right: 0 !important;
        padding-left: 0 !important;
        padding: 0 !important;
        align-items: center;
        justify-content: center;
        text-align: center;
        /* display: none; */
      }
    }
  }
`;
import styled from 'styled-components';

export const TecSkillsStyles = styled.div`
  width: 100vw;
  height: 6rem;

  position: absolute;
  bottom: -35px;
  left: 0;

  flex-direction: row;
  gap: 5rem;
  justify-content: space-around;
  align-items: center;

  z-index: 100;
      
  padding-top: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;

  .swiper-skills {
    width: 100%;
    padding-left: 3rem;
    padding-bottom: 2rem;
  }

  .swiper-pagination {
    position: absolute;
    left: 45%;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 1000;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: flex;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 100;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }

  .item {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    .icon {
      width: 6.5rem;
      height: 6.5rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 1rem;

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

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      padding: 0;
      justify-content: center;
      align-items: center;
      gap: 0 !important;

      .swiper-skills {
        width: 100%;
        padding-left: 0;
        padding-bottom: 0;
        margin-top: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .swiper-content-item {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item {
        align-self: center;
        justify-self: center;
        /* margin-left: 3rem; */
        margin-bottom: 2rem;

        .icon {
          width: 10rem;
          height: 10rem;
        }
      }

      .swiper-pagination {
        position: absolute;
        left: 10%;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 1000;
      }
    }
  }
`;
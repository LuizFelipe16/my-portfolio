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
      
  padding-left: 3rem;
  padding-right: 3rem;

  div {
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
`;
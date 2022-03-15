import styled from 'styled-components';

export const Services = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  background-color: var(--gray-900);

  background-image: url('/images/services-bg.png');
  object-fit: cover;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
import styled from "styled-components";
import NLink from 'next/link';
import { Text } from "../../../_app";

export function Navbar() {
  return (
    <Navigation>
      <NLink href='/' passHref>
        <Text className='goBack' type='h1' text='MyBlog' />
      </NLink>
      <hr className='nave-line' />
      <Text text='Front-end' />
      <Text text='Mobile' />
      <Text text='Back-end' />
    </Navigation>
  );
}

const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  background-color: var(--gray-800);
  position: absolute;
  top: 0;
  left: 0;
  padding-right: 2rem;
  padding-left: 2rem;
  gap: 2rem;

  .nave-line {
    width: 0.15rem;
    height: 1.5rem;
    background: var(--cyan-500);
    border: none;
  }
    
  > h1 {
    font-family: 'Montserrat';
    color: var(--cyan-500);
    font-weight: 500;
    font-size: 1.3rem;
  }
    
  > p {
    font-family: 'Nunito';
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 200;
    opacity: 0.5;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

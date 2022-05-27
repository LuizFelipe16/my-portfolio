import styled from 'styled-components';
import { styledPresets } from '../../../../_app';

export const ItemSpace = styled.div`
  width: 17rem;
  max-width: 18rem;
  height: 20rem;

  ${styledPresets.column.startStart};
  gap: 0.8rem;

  padding: 2.25rem 0.65rem;
  border-radius: 1.2rem;
  background: var(--gray-800);
  border-width: 1px;

  transition: 0.2s;
  animation: blinker_neon 4s infinite both;

  &:hover {
    margin-top: -0.5rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  .content {
    flex: 1;
    width: 100%;
    height: 100%;

    margin-left: 1rem;

    ${styledPresets.column.startStart};
    gap: 0.75rem;

    h1 {
      font: 600 1.4rem 'Montserrat', sans-serif;
    }

    p {
      color: var(--gray-100) !important;
      font: 200 1rem 'Montserrat', sans-serif;
      line-height: 1.5rem;
    }
  }

  .go {
    margin-left: 1rem;
    font-size: 1.6rem;
    opacity: 0.4;
    transition: 0.4s;

    &:hover {
      opacity: 1;
    }
  }

  @keyframes blinker_neon {
    0% {
      border-color: var(--gray-700);
    }
    25% {
      border-color: var(--cyan-500);
    }
    50% {
      border-color: var(--cyan-500);
    }
    75% {
      border-color: var(--cyan-500);
    }
    100% {
      border-color: var(--gray-700);
    }
  }

  @media (min-width: 200px) and (max-width: 768px) {
    & {
      width: 100%;
      ${styledPresets.column.centerCenter}

      img {
        width: 4rem;
        height: 4rem;
      }

      .content {
        margin-left: 0;
        ${styledPresets.column.centerCenter}
        text-align: center;
      }

      .go {
        margin-left: 0;
      }
    }
  }
`
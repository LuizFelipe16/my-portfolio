import styled from "styled-components";

export const ListFolders = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  gap: 1rem;

  margin-top: -2rem !important;
  margin-bottom: 5rem !important;
  z-index: 100;

  @media (min-width: 200px) and (max-width: 980px) {
    & {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
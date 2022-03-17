import styled from "styled-components";

export const Link = styled.button`
  transition: 0.2s;

  &:hover {
    margin-left: 3px;
    text-decoration: underline;
    color: var(--cyan-500);
  }
`;
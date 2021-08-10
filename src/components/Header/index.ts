import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  z-index: 999;

  margin-bottom: 4rem;

  h1 {
    text-align: center;

    font-size: 2rem;
    color: var(--grayish-blue);

    margin-bottom: 2.5rem;
  }

  span {
    margin: 1.5rem;

    color: var(--light-grayish-blue);

    &.active {
      text-decoration: underline;
      color: var(--secondary);
    }
  }
`;

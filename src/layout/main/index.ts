import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  min-height: 100vh;

  background: var(--bg-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.login {
    background: linear-gradient(80deg, var(--primary), var(--secondary));
  }
`;

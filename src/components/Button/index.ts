import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 2rem;

  width: 250px;
  height: 45px;

  background: linear-gradient(80deg, var(--primary), var(--secondary));
  color: var(--button-color);
  border: 0;
  border-radius: 5px;

  position: relative;
  z-index: 999;

  cursor: pointer;

  transition: filter 0.2s;

  &.active-button {
    background: var(--button-color);
    color: var(--primary);
    border: 0;
    border-radius: 5px;
  }

  &.login {
    background: rgb(231,92,92);
    background: radial-gradient(circle, rgba(231,92,92,1) 0%, rgba(242,0,0,1) 100%);
  }

  &:hover {
    filter: brightness(85%);
  }
`;

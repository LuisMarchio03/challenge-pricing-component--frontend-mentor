import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 2rem;

  width: 250px;
  height: 45px;

  background: linear-gradient(80deg, var(--primary), var(--secondary));
  color: var(--button-color);
  border: 0;
  border-radius: 5px;

  cursor: pointer;

  transition: filter 0.2s;

  &.active-button {
    background: var(--button-color);
    color: var(--primary);
    border: 0;
    border-radius: 5px;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

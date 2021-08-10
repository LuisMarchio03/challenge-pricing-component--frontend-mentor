import styled from "styled-components";

export const Image = styled.img`
  position: absolute;

  z-index: 1;

  &:first-child {
    top: 0;
    right: 0;
  }

  &:last-child {
    bottom: 0;
    left: 0;
  }
`;

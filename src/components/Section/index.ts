import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;  

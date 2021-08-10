import styled from 'styled-components';

export const Details = styled.div`
  margin-top: 2rem;

  p {
    
    padding: 1rem;
    border-bottom: 1px solid var(--dark-grayish-blue);

    margin: 1rem;
  }

  &.active-details {
    p {
      border-bottom: 1px solid var(--very-light-grayish-blue);
      color: var(--very-light-grayish-blue);
    }
  }
`;

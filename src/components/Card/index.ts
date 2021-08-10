import styled from 'styled-components';

export const Card = styled.div`
  background: var(--cards);
  width: 300px;
  min-height: 400px;
  padding: 2%;

  text-align: center;

  position: relative;
  z-index: 999;

  border-radius: 15px;

  -webkit-box-shadow: 1px 1px 2px 0px var(--secondary);
  -moz-box-shadow: 1px 1px 2px 0px var(--secondary);
  box-shadow: 1px 1px 2px 0px var(--secondary);

  > p {
    color: var(--light-grayish-blue);
  }

  h2 {
    margin: 2rem;

    font-size: 3rem;

    color: var(--dark-grayish-blue);

    span {
      font-size: 2rem;
      padding: 0 5px;
    }
  }

  &.active {
    min-height: 450px;
    background: linear-gradient(80deg, var(--primary), var(--secondary));

    > p {
      color: var(--very-light-grayish-blue);
    }

    h2 {
      margin: 2rem;

      font-size: 3rem;

      color: var(--very-light-grayish-blue);

      span {
        font-size: 2rem;
        color: var(--very-light-grayish-blue);
      }
    }
      
  }

`;

import styled from 'styled-components';

export const CardProfile = styled.section`
    width: 600px;
    height: 400px;

    background: rgb(231,92,92);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  .boxUser {
    display: flex;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    h1 {
      font-size: 1.2rem;

      padding-top: 2rem;
      padding-left: 1rem;

      color: var(--white);
    }
  }

  .shoppingList {
    width: 400px;
    height: 150px;

    border: 1px solid var(--primary);

    display: flex;
    justify-content: center;
    align-items: center;

    > ul li {
      color: var(--white);
    }
  }
`;

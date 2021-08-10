import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, button, a, input, textarea {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--text-color);
  }

  :root {
    --bg-color: hsl(240, 78%, 98%);
    --text-color: #333333;

    --white: #dddddd;

    --cards: #ffffff;
    --button-color: #ffffff;

    --primary: hsl(236, 72%, 79%);
    --secondary: hsl(237, 63%, 64%);

    --very-light-grayish-blue: hsl(240, 78%, 98%);
    --light-grayish-blue: hsl(234, 14%, 74%);
    --grayish-blue: hsl(233, 13%, 49%);
    --dark-grayish-blue: hsl(232, 13%, 33%);
  }
`;

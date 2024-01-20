import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function StyledComponents() {
  let color = "#db7093",
    alphaColor = "db709380";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
  `;
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({ props }) => alphaColor || "#000"};
    background-color: ${color};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-out;

    ${(isButton) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25 rem;
        cursor: pointer;
      `};

    &:hover {
      background-color: ${alphaColor};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "##DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
  h2{
    padding: 2rem;
    border-radius: 2rem;
    color: #61dafb; 
  }
  `;

  return (
    <>
      <GlobalStyle /> 
      <h2>Styled components</h2>
      <MyH3> Hello I'm a styled component!</MyH3>
      <MyH3 color="#61dafb"> Hello I'm a styled component!</MyH3>
      <MyH3 isButton> Hello I'm a component styled like a button!</MyH3>
      <ThemeProvider theme={light}>
        <Box>I'm a Box with Light theme.</Box>
        <BoxRounded>I'm hereditary styled box component</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>I'm a Box with Dark theme.</Box>
        <BoxRounded>I'm hereditary styled box component</BoxRounded>
      </ThemeProvider>
    </>
  );
}

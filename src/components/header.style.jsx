import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,200,300..700;1,300..700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Red Hat Text", sans-serif;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1% 5% 1% 5%;
  section {
    display: flex;
  }
  .logoApp,
  .logoCell {
    display: flex;
    align-items: center;
    width: 12vw;
    font-size: 14px;
    color: #606060;
    gap: 5px;
  }
  .logoCell {
    background-color: #ffc72c;
    border-radius: 10px;
    justify-content: center;
    color: black;
  }
`;
export const Section = styled.section`
  background-color: #ffc72c;
  .container {
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10% 0 0;
  }
  .text {
    width: 550px;
    height: 230px;
  }
  figure {
    display: flex;
    justify-content: center;
  }
  figure img {
    max-width: 12vw;
    max-height: 12vh;
  }
`;
export const SectionT = styled.section`
  background-color: #feb706;
  color: white;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  .promo {
    font-size: 35px;
  }

  .cards {
    display: flex;
    gap: 25px;
    clear: both;
    float: left;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  height: 30vh;
  gap: 13px;
  background-color: white;
  color: black;
  border-radius: 7px;
  img {
    width: 100%;
  }
  button {
    background-color: #ffc72c;
    border: none;
    width: 45%;
    min-height: 17%;
    border-radius: 7px;
    font-weight: bold;
  }
  h2 {
    font-size: 13px;
    text-align: center;
  }
`;
export const Footer = styled.footer`
  display: flex;
  height: 13vh;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 15vw;
    img {
      width: 24px;
    }
  }
  p {
    font-size: 14px;
  }
  .AppStore {
    display: flex;
    width: 25vw;
    justify-content: space-around;
  }
`;

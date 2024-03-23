import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Red Hat Text", sans-serif;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1% 5% 1% 5%;
  section {
    display: flex;
  }
  .logoApp, .logoCell {
    display: flex;
    align-items: center;
    width: 12vw;
    font-size: 14px;
    color: #606060;
    gap: 5px;
  }
  .logoCell {
    background-color:#FFC72C;
    border-radius: 10px;
    justify-content: center;
    color: black;
  }
`
export const Section = styled.section`
  background-color: #FFC72C;
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
`
export const SectionT = styled.section`
 background-color: #feb706; 
 color: white;
 height: 50vh; 
 display: flex;
 justify-content: flex-end;
 align-items: center;
 flex-direction: column;
 gap: 45px;
 /* ajustar tamanho do texto */
 .promo {
font-size: 35px;
 
 }
 
 .cards {
    display: flex;
    gap: 25px;
    border: solid palevioletred 2px;
    clear: both;
    float: left;  
  }
`
export const Card = styled.div`
  border: solid white 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  height: 30vh;
  gap: 12px;
  background-color: white;
  color: black;
  border-radius: 7px;
  img {
    width: 100%;
  }
  button {
    background-color:#FFC72C;
    border: none;
    width: 45%;
    min-height: 17%;
    border-radius: 7px;
  }
  h2 {
    font-size: 13px;
    text-align: center;
  }
`
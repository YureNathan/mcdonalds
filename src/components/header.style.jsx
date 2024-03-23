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
export const Main = styled.main `
 
  .container {
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10% 0 0 ;
    background-color: #FFC72C;
    

  }
  .text {
    width: 550px;
    height: 230px;
    border: solid 2px red;
  }
`
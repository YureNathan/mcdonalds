import Header from "./components/Header"
import * as S from "./components/header.style"
import Main from "./components/Main"
import Footer from "./components/Footer"
// corrigir na pasta components criar pasta para cada componente. e corrgir os caminhos 

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

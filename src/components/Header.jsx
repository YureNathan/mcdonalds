import logo from "../../src/assets/logo.svg"
import logoApp from "../../src/assets/logoApp.svg"
import logoCell from "../../src/assets/logoCell.svg"
import * as S from "./header.style"

export default function Header() {
  return (
    <S.Header>
      <img src={logo} alt="logo MC Donalds" />  
      <section>
        <div className="logoApp">
          <img src={logoApp} alt="" />
          <p>Baixe o App</p>
        </div>
        <div className="logoCell">
          <h4>Peça seu Méqui</h4>
          <img src={logoCell} alt="" />
        </div>
      </section>
    </S.Header>
  )
}

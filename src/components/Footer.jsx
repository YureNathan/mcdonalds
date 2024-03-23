import * as S from "./header.style"
import logo from "../../src/assets/logo.svg"
import appStore from "../../src/assets/appStore.svg"
import playStore from "../../src/assets/playStore.svg"

export default function Footer() {
  return (
    <S.Footer>
    <div className="footer">
      <img src={logo} alt="logo Mc" />
      <p>© McDonald’s 2024</p>
    </div>
    <div className="AppStore">
      <img src={playStore} alt="" />
      <img src={appStore} alt="" />
    </div>
    
    </S.Footer>
    )
}

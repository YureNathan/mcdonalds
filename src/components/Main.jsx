import texto from "../../src/assets/texto.svg"

import * as S from "./header.style"
export default function Main() {
  return (
    <S.Main>
      <div className="container">
      <img  className="text" src={texto} alt="" />
      </div>
    </S.Main>
  )
}

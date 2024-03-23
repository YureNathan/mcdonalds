import texto from "../../src/assets/texto.svg"
import bigmac from "../../src/assets/bigmac.svg"
import batata from "../../src/assets/batata.png"
import sorvete from "../../src/assets/sorvete.png"


import * as S from "./header.style"
export default function Main() {
  return (
    <main>

<S.Section>

      <div className="container">
        <img src={bigmac}alt="" />
        <img  className="text" src={texto} alt="" />
        </div>
        <figure>
        <img className="bigmac" src={bigmac} alt="" />
        <img className="batata"src={batata} alt="" />
        <img className="sorvete"src={sorvete} alt="" />
      </figure>
      </S.Section>
    
    </main>
  )
}

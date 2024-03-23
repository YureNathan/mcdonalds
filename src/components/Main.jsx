import texto from "../../src/assets/texto.svg"
import bigmac from "../../src/assets/bigmac.svg"
import batata from "../../src/assets/batata.png"
import sorvete from "../../src/assets/sorvete.png"
import sofa from "../../src/assets/sofa.png"
import loja from "../../src/assets/loja.png"
import medidas from "../../src/assets/medidas.png"

import Card from "./Cards";
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
    <S.SectionT>
    <h2 className="promo">Promoção</h2>
    <div className="cards">
      <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}></Card>
      <Card imagem={loja} texto={"venha conhecer nossa nova loja"}></Card>
      <Card imagem={medidas} texto={"Confira as medidas que Méqui adotou!"}></Card>
    </div>
    </S.SectionT>
    
    </main>
  )
}

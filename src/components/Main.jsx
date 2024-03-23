import texto from "../../src/assets/texto.svg"
import bigmac from "../../src/assets/bigmac.svg"
import batata from "../../src/assets/batata.png"
import sorvete from "../../src/assets/sorvete.png"
import sofa from "../../src/assets/sofa.png"
import loja from "../../src/assets/loja.png"
import medidas from "../../src/assets/medidas.png"

import Card from "./Cards";
import * as S from "./header.style"
import { useState } from "react"

export default function Main() {

  const [produto, setProduto] = useState(bigmac);

  return (
    <main>
<S.Section>
      <div className="container">
        <img src={produto}alt="Produto atual" />
        <img  className="text" src={texto} alt="Banner" />
        </div>
        <figure>
        <img onClick={()=>{setProduto(bigmac)}}className="bigmac" src={bigmac} alt="Foto BIG MAC" />
        <img onClick={()=>{setProduto(batata)}} className="batata"src={batata} alt="Foto batata frita" />
        <img onClick={()=>{setProduto(sorvete)}} className="sorvete"src={sorvete} alt="Foto casquinha" />
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

import * as S from "./header.style";

export default function Cards({imagem, texto}) {
  return (
   <S.Card>
    <img src={imagem} alt="" />
    <h2>{texto}</h2>
    <button>Clique aqui</button>
   </S.Card>
  )
}

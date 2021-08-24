import IconInfo from 'app/icons/FilledInfo'

import * as S from './styles'

function Info() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Head>
          <S.Title>Premium</S.Title>
          <a target="_blank" href="#">
            <IconInfo fill="#616161" />
          </a>
        </S.Head>
        <S.Pricebox>
          <S.Price>R$ 99,90</S.Price>
          <S.Coin>BRL</S.Coin>
        </S.Pricebox>
        <S.About>
          <S.Name>Playlist mercadopago</S.Name>
          <S.Description>
            Está é minha primeira playlist no youtube e é um prazer enorme para
            mim você assistir este vídeo
          </S.Description>
        </S.About>
      </S.Content>
    </S.Wrapper>
  )
}

export default Info

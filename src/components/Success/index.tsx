import IconSuccess from 'app/icons/FillSuccess'
import { SnapshotSection } from 'contexts/Checkout'

import * as S from './styles'

const Success = () => {
  const { useSection } = SnapshotSection()

  return (
    <S.Wrapper>
      <S.Head>
        <S.Success>
          <IconSuccess size={58} />
        </S.Success>
      </S.Head>
      <S.Title>Pagamento com sucesso!</S.Title>
      <S.Text>
        O código abaixo é a sua chave de segurança de comprovante de pagamento.
        Envie para o suporte para iniciar a instalação de sua aplicação.
      </S.Text>
      <S.Footer>
        <S.Keycode>{useSection.id}</S.Keycode>
        <S.Support>
          <S.Sub>Ou toque para enviar</S.Sub>
          <S.Button type="button">Enviar para o Suporte</S.Button>
        </S.Support>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Success

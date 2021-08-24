import { SnapshotSection } from 'contexts/Checkout'
import * as S from './styles'

function StepBox() {
  const { useSection } = SnapshotSection()

  return (
    <S.Wrapper>
      <S.Content>
        <S.Step status={useSection.screen} />
        <S.Li>
          <S.Button type="button">
            <S.Rouded>1</S.Rouded>
            <S.Text>Dados pessoais</S.Text>
          </S.Button>
        </S.Li>
        <S.Li>
          <S.Button type="button">
            <S.Rouded>2</S.Rouded>
            <S.Text>Pagamento</S.Text>
          </S.Button>
        </S.Li>
        <S.Li>
          <S.Button type="button">
            <S.Rouded>3</S.Rouded>
            <S.Text>Obrigado!</S.Text>
          </S.Button>
        </S.Li>
      </S.Content>
    </S.Wrapper>
  )
}

export default StepBox

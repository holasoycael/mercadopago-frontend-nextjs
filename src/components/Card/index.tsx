import { SnapshotProfile } from 'contexts/Checkout'
import { SnapshotCard, SnapshotOpacity } from 'contexts/Main'
import GenerateCardNumber from 'utils/modules/GenerateCardNumber'
import * as S from './styles'

function Card() {
  const { useCard } = SnapshotCard()
  const { useOpacity } = SnapshotOpacity()
  const { useProfile } = SnapshotProfile()
  const {
    display_name = '',
    card_number = '',
    card_month = '',
    card_year = '',
    code = '',
    issuer
  } = useProfile
  const {
    cardNumber = false,
    cardExpirationMonth = false,
    cardExpirationYear = false,
    cardholderName = false,
    securityCode = false
  } = useOpacity

  return (
    <S.Wrapper>
      <S.Content>
        <S.Front status={useCard} issuer={issuer}>
          <S.ColumnOne>
            <S.Head>
              <S.Detail />
              <S.Brand issuer={issuer} />
            </S.Head>
          </S.ColumnOne>
          <S.ColumnTwo>
            <S.Number status={!!card_number} opacityStatus={cardNumber}>
              {GenerateCardNumber(card_number)}
            </S.Number>
          </S.ColumnTwo>
          <S.ColumnTree>
            <S.Name status={!!display_name} opacityStatus={cardholderName}>
              {display_name}
            </S.Name>
            <S.Expiration>
              <S.Month
                status={!!card_month}
                opacityStatus={cardExpirationMonth}
              >
                {card_month}
              </S.Month>
              <S.Slash />
              <S.Year status={!!card_year} opacityStatus={cardExpirationYear}>
                {card_year}
              </S.Year>
            </S.Expiration>
          </S.ColumnTree>
        </S.Front>
        <S.Back status={useCard} issuer={issuer}>
          <S.ColumnFour>
            <S.Black />
          </S.ColumnFour>
          <S.ColumnFive>
            <S.Lines />
            <S.Code>
              <S.CodeNumber status={!!code} opacityStatus={securityCode}>
                {code}
              </S.CodeNumber>
            </S.Code>
          </S.ColumnFive>
        </S.Back>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card

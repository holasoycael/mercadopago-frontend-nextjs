import { useState, useRef } from 'react'

import ElementProvider from 'contexts/Main'

import Card from 'components/Card'
import FormPayment from 'components/FormPayment'
import FormPersonal from 'components/FormPersonal'
import Success from 'components/Success'

import * as S from './styles'
import { SnapshotSection } from 'contexts/Checkout'

export interface OpacityProps {
  cardNumber?: boolean
  cardExpirationMonth?: boolean
  cardExpirationYear?: boolean
  cardholderName?: boolean
  securityCode?: boolean
}

function CheckoutForm() {
  const formRef = useRef<HTMLFormElement>(null!)
  const { useSection } = SnapshotSection()
  const [useCard, setCard] = useState(false)
  const [useOpacity, setOpacity] = useState<OpacityProps>({})

  return (
    <ElementProvider {...{ useCard, setCard, useOpacity, setOpacity, formRef }}>
      {useSection.screen !== 3 ? (
        <S.Wrapper>
          <S.Payment>
            <form
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
              ref={formRef}
            >
              <FormPersonal />
              <FormPayment />
            </form>
          </S.Payment>
          <Card />
        </S.Wrapper>
      ) : (
        <Success />
      )}
    </ElementProvider>
  )
}

export default CheckoutForm

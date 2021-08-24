import { useRef } from 'react'
import { toast } from 'react-toastify'

import axios from 'axios'

import { SnapshotModal } from 'contexts/Index'
import {
  SnapshotSection,
  SnapshotInstallments,
  SnapshotProfile
} from 'contexts/Checkout'
import { SnapshotCard, SnapshotOpacity, SnapshotRef } from 'contexts/Main'

import MercadopagoErrorStatus from 'utils/modules/MercadopagoErrorStatus'

import * as S from './styles'

type FormSubmitThenProps = {
  status: number
  body: {
    id: number
    transaction_amount: number
    date_approved: string
    first_six_digits: string
    last_four_digits: string
    display_name: string
  }
}
type InputProps = (data: string, val: string) => void
type OpacityProps = (data: string, val: boolean) => void
type FormSubmitProps = (data: {
  token: string
  payment_method_id?: string
  transaction_amount: number
  description: string
  installments: number
  email?: string
}) => Promise<FormSubmitThenProps>

function FormPayment() {
  const clickRef = useRef(true)
  const { useSection, setSection } = SnapshotSection()
  const { setOpacity } = SnapshotOpacity()
  const { setModal } = SnapshotModal()
  const { useInstallments } = SnapshotInstallments()
  const { setCard } = SnapshotCard()
  const { formRef } = SnapshotRef()
  const { useProfile, setProfile } = SnapshotProfile()
  const {
    card_number = '',
    card_month = '',
    card_year = '',
    code = '',
    doc = '',
    e_mail,
    issuer,
    slt_installment = 1
  } = useProfile

  const inputFn: InputProps = (data, val) =>
    setProfile((prevState) =>
      Object({
        ...prevState,
        [data]: val
      })
    )

  const opacityFn: OpacityProps = (data, val) =>
    setOpacity((prevState) =>
      Object({
        ...prevState,
        [data]: val
      })
    )

  const selectFn = (event: EventTarget & HTMLSelectElement) =>
    setProfile((prevState) =>
      Object({
        ...prevState,
        slt_installment: Number(event.options[event.selectedIndex].value)
      })
    )

  const revertFn: OpacityProps = (data, val) => {
    setCard(val)
    opacityFn(data, val)
  }

  const formSubmit: FormSubmitProps = async (data) => {
    const res = await axios.post('http://localhost:5000/', data)
    return res.data
  }

  const confirmFn = () => {
    if (clickRef.current) {
      clickRef.current = false
      window.Mercadopago.createToken(formRef.current, (status, response) => {
        if (status === 200 || status === 201) {
          setModal({ status: true })

          formSubmit({
            token: response.id,
            payment_method_id: issuer,
            transaction_amount: 99.9,
            description: 'Playlist do youtube',
            installments: slt_installment,
            email: e_mail
          })
            .then((data) => {
              const { status, body } = data

              if (status === 200) {
                toast.success('Compra realizada com sucesso!')

                setSection({ screen: 3, id: body.id })
              } else {
                toast.error('Erro interno do servidor!')
              }
            })
            .catch(() => {
              toast.error('Erro ao iniciar a compra!')
            })
            .finally(function () {
              window.Mercadopago.clearSession()
              setModal({ status: false })
              clickRef.current = true
            })

          clickRef.current = true
        } else if (status === 423) {
          toast.error('Espere um momento e tente novamente.')
          clickRef.current = true
        } else if (status === 400) {
          const { cause } = response
          const [error] = cause

          clickRef.current = true
          MercadopagoErrorStatus(error.code)
        } else {
          toast.error('Certifique-se que todos os dados estão corretos!')
          clickRef.current = true
        }
      })
    }
  }

  const sectionFn = (screen: number) =>
    setSection((prevState) => Object({ ...prevState, screen }))

  const isValidInput = (id: string, val: string, size: number) =>
    !isNaN(Number(val)) && val.replace(/\D/g, '') !== id && val.length <= size

  const inputValidFn = (id: string, val: string) => {
    switch (id) {
      case 'card_number':
        if (isValidInput(id, val, 16)) {
          inputFn(id, val)
        }
        break
      case 'card_month':
        if (isValidInput(id, val, 2)) {
          inputFn(id, val)
        }
        break
      case 'card_year':
        if (isValidInput(id, val, 2)) {
          inputFn(id, val)
        }
        break
      case 'code':
        if (isValidInput(id, val, 4)) {
          inputFn(id, val)
        }
        break
      default:
        inputFn(id, val)
    }
  }

  return (
    <S.Wrapper status={useSection.screen}>
      <S.Group>
        <S.Flex>
          <S.Input
            type="text"
            data-checkout="cardNumber"
            onInput={(e) =>
              inputValidFn('card_number', (e.target as HTMLInputElement).value)
            }
            onFocus={() => opacityFn('cardNumber', true)}
            onBlur={() => opacityFn('cardNumber', false)}
            value={card_number}
            status={!!card_number}
          />
          <S.Label>Número do cartão</S.Label>
        </S.Flex>
      </S.Group>

      <S.Group>
        <S.Flex>
          <S.Input
            type="text"
            data-checkout="cardExpirationMonth"
            onInput={(e) =>
              inputValidFn('card_month', (e.target as HTMLInputElement).value)
            }
            onFocus={() => opacityFn('cardExpirationMonth', true)}
            onBlur={() => opacityFn('cardExpirationMonth', false)}
            value={card_month}
            status={true}
          />
          <S.Label>MM</S.Label>
        </S.Flex>

        <S.Flex>
          <S.Input
            type="text"
            data-checkout="cardExpirationYear"
            onInput={(e) =>
              inputValidFn('card_year', (e.target as HTMLInputElement).value)
            }
            onFocus={() => opacityFn('cardExpirationYear', true)}
            onBlur={() => opacityFn('cardExpirationYear', false)}
            value={card_year}
            status={true}
          />
          <S.Label>AA</S.Label>
        </S.Flex>

        <S.Flex minWidth="40%">
          <S.Input
            type="text"
            data-checkout="securityCode"
            onInput={(e) =>
              inputValidFn('code', (e.target as HTMLInputElement).value)
            }
            onFocus={() => revertFn('securityCode', true)}
            onBlur={() => revertFn('securityCode', false)}
            value={code}
            status={true}
          />
          <S.Label>CVC/CVV</S.Label>
        </S.Flex>
      </S.Group>

      <S.Group>
        <S.Select>
          <select id="installments" onChange={(e) => selectFn(e.target)}>
            {useInstallments.map(({ recommended_message, installments }, i) => (
              <option key={i} value={installments}>
                {recommended_message}
              </option>
            ))}
          </select>
        </S.Select>
      </S.Group>

      <S.Group>
        <S.Select maxWidth="130px">
          <select id="docType" data-checkout="docType" />
        </S.Select>

        <S.Flex>
          <S.Input
            type="text"
            data-checkout="docNumber"
            onInput={(e) =>
              inputFn('doc', (e.target as HTMLInputElement).value)
            }
            value={doc}
            status={!!doc}
          />
          <S.Label>Número do documento</S.Label>
        </S.Flex>
      </S.Group>

      <S.Footer>
        <S.Simple type="button" onClick={() => sectionFn(1)}>
          Voltar
        </S.Simple>
        <S.Button type="submit" onClick={() => confirmFn()}>
          Finalizar o pagamento
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default FormPayment

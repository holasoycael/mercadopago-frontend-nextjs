import { useState, useEffect, useRef } from 'react'

import ElementProvider from 'contexts/Checkout'

import Header from 'components/Header'
import StepBox from 'components/StepBox'
import Checkout from 'components/Checkout'
import Info from 'components/Info'

import * as S from './styles'

export interface ProfileProps {
  display_name?: string
  e_mail?: string
  e_mail_valid?: string
  card_number?: string
  card_month?: string
  card_year?: string
  code?: string
  doc?: string
  issuer?: string
  slt_installment?: number
}

export interface SectionProps {
  screen: number
  id?: number
}

function TemplateHome() {
  const cardNumberRef = useRef(false)
  const [useSection, setSection] = useState<SectionProps>({ screen: 1 })
  const [useProfile, setProfile] = useState<ProfileProps>({})
  const [useTerms, setTerms] = useState(false)
  const { card_number = '', issuer } = useProfile

  const [useInstallments, setInstallments] = useState([
    {
      installments: 1,
      recommended_message: 'Parcelas'
    }
  ])

  useEffect(() => {
    window.onload = () => {
      function checkFn() {
        window.Mercadopago.setPublishableKey(
          'TEST-5946973a-eb86-4cac-97f5-84ef934ed996'
        )
        window.Mercadopago.getIdentificationTypes()
      }
      checkFn()

      setTimeout(() => {
        if (!window.Mercadopago.initialized) {
          checkFn()
          console.log('Reconectando...')
        }
      }, 1000)
    }
  }, [])

  useEffect(() => {
    if (cardNumberRef.current) {
      if (card_number || (!card_number && issuer)) {
        // recebe o nome do cartão antecipado
        if (card_number.length > 5 && !issuer) {
          const bin = card_number.substring(0, 6)
          window.Mercadopago.getPaymentMethod({ bin }, (status, response) => {
            if (status === 200) {
              setProfile((prevState) => {
                const assoc = { ...prevState }
                assoc.issuer = response[0].id
                return assoc
              })
            } else {
              console.log('error:', response)
            }
          })

          window.Mercadopago.getInstallments(
            { bin, amount: 50 },
            function (status, response) {
              if (status === 200) {
                setInstallments(
                  response[0].payer_costs.map(
                    ({ recommended_message, installments }) => {
                      return {
                        recommended_message,
                        installments
                      }
                    }
                  )
                )
              } else {
                console.log('error:', response)
              }
            }
          )
        } else {
          if (card_number.length < 6 && issuer) {
            setInstallments([
              {
                installments: 1,
                recommended_message: 'Parcelas'
              }
            ])
            setProfile((prevState) => {
              const assoc = { ...prevState }
              delete assoc.issuer
              return assoc
            })
          }
        }
      }
    } else {
      cardNumberRef.current = true
    }
  }, [card_number])

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Main>
          <ElementProvider
            {...{
              useSection,
              setSection,
              useProfile,
              setProfile,
              useInstallments,
              setInstallments,
              useTerms,
              setTerms
            }}
          >
            <StepBox />
            <Checkout />
          </ElementProvider>
        </S.Main>
        <Info />
      </S.Content>
    </S.Wrapper>
  )
}

export default TemplateHome

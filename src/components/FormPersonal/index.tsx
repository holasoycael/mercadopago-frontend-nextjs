import { toast } from 'react-toastify'

import {
  SnapshotProfile,
  SnapshotSection,
  SnapshotTerms
} from 'contexts/Checkout'
import { SnapshotOpacity } from 'contexts/Main'

import ValidPersonalForm from 'utils/modules/ValidPersonalForm'

import * as S from './styles'

type InputProps = (data: string, val: string) => void
type OpacityProps = (data: string, val: boolean) => void

function FormPersonal() {
  const { useSection, setSection } = SnapshotSection()
  const { useTerms, setTerms } = SnapshotTerms()
  const { useProfile, setProfile } = SnapshotProfile()
  const { display_name = '', e_mail = '', e_mail_valid = '' } = useProfile
  const { setOpacity } = SnapshotOpacity()

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

  const sectionFn = (screen: number) => {
    if (ValidPersonalForm({ display_name, e_mail, e_mail_valid }) && useTerms) {
      setSection((prevState) => Object({ ...prevState, screen }))
    } else {
      toast.error('Verifique todos os campos!')
    }
  }

  return (
    <S.Wrapper status={useSection.screen}>
      <S.Group>
        <S.Flex>
          <S.Input
            type="text"
            data-checkout="cardholderName"
            onInput={(e) =>
              inputFn(
                'display_name',
                (e.target as HTMLInputElement).value.toUpperCase()
              )
            }
            onFocus={() => opacityFn('cardholderName', true)}
            onBlur={() => opacityFn('cardholderName', false)}
            value={display_name}
            status={!!display_name}
          />
          <S.Label>Nome e sobrenome</S.Label>
        </S.Flex>
      </S.Group>

      <S.Group>
        <S.Flex>
          <S.Input
            type="email"
            autoComplete="off"
            onInput={(e) =>
              inputFn('e_mail', (e.target as HTMLInputElement).value)
            }
            value={e_mail}
            status={!!e_mail}
          />
          <S.Label>Digite seu E-mail</S.Label>
        </S.Flex>
      </S.Group>

      <S.Group>
        <S.Flex>
          <S.Input
            type="email"
            autoComplete="off"
            onInput={(e) =>
              inputFn('e_mail_valid', (e.target as HTMLInputElement).value)
            }
            value={e_mail_valid}
            status={!!e_mail_valid}
          />
          <S.Label>Confirmação de E-mail</S.Label>
        </S.Flex>
      </S.Group>

      <S.Footer>
        <S.Terms>
          <S.Termbox>
            <input type="checkbox" readOnly checked={useTerms} />
            <label onClick={() => setTerms((prevState) => !prevState)} />
          </S.Termbox>
          <span>
            Li e aceito a <S.Help type="button">Política de Privacidade</S.Help>
          </span>
        </S.Terms>

        <S.Button type="button" onClick={() => sectionFn(2)}>
          Próximo passo
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default FormPersonal

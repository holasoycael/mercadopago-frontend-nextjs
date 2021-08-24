import styled, { css } from 'styled-components'

import * as S from 'components/FormPersonal/styles'

interface WrapperProps {
  status: number
}

const wrapperModifiers = {
  display: (data: number) => css`
    display: ${data === 2 ? 'block' : 'none'};
  `
}

export const Wrapper = styled.div`
  ${({ status }: WrapperProps) => css`
    position: relative;

    ${wrapperModifiers.display(status)}

    & > *:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  `}
`

export const Input = styled(S.Input)``

export const Label = styled(S.Label)``

export const Flex = styled(S.Flex)``

export const Group = styled(S.Group)``

export const Footer = styled(S.Footer)``

export const Button = styled(S.Button)``

export const Simple = styled.button`
  color: #7ba9d6;
  text-decoration: underline;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 100;
`

export type SelectProps = {
  maxWidth?: string
}

export const Select = styled(Flex)`
  ${({ maxWidth }: SelectProps) => css`
    max-width: ${maxWidth};
    min-height: 40px;

    & select {
      width: 100%;
      position: initial;
      color: #777;
      font-weight: 600;
      background-color: #ececec;
      padding-left: 24px;
      padding-right: 42px;
      border-radius: 3px;
      transition: all 375ms ease-in-out;
      font-family: var(--font-open);
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      text-align-last: center;
      direction: ltr;
      background-image: url('https://lh6.googleusercontent.com/proxy/LnbzEmBi9EQVYlCQcxOShrhtbeICdW0N7dlFEn4VAFKB6auDhYegFVQg665RROyDao0FKOBxjTmjMYH0GAVwvPkItxRnUjznsRyzl8y4ZogsqPW9usbsjzAlADHQIUkpw1m8=s0-d');
      background-repeat: no-repeat;
      background-position: calc(100% - 18px);
    }
  `}
`

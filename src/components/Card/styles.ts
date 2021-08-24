import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  font-family: var(--font-lato);
  position: relative;
  display: flex;
  width: 100%;
`

export const Content = styled.div`
  width: 304px;
  position: relative;
  margin: auto;
  margin-right: 0;
  height: 182px;
`

const cardStyleModifiers = (value?: string) => {
  if (value === 'master')
    return css`
      background-color: #031b11;
    `
  if (value === 'visa')
    return css`
      background-color: #062194;
    `
  if (value === 'amex')
    return css`
      background-color: #8e8215;
    `
  if (value === 'hipercard')
    return css`
      background-color: #ad2323;
    `
  if (value === 'elo')
    return css`
      background-color: #1a3b73;
    `
  if (value === 'diners')
    return css`
      background-color: #6e8f92;
    `

  return css`
    background-color: #000000;
  `
}

type CardStyleProps = {
  issuer?: string
}

const CardStyle = styled(Content)`
  ${({ issuer }: CardStyleProps) => css`
    position: absolute;
    transition: transform 0.5s ease, background-color 0.5s linear;
    box-shadow: inset 0px -2px 1px 1px rgba(0, 0, 0, 0.15);
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;

    ${cardStyleModifiers(issuer)}
    background-image: repeating-linear-gradient(
        45deg,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      repeating-linear-gradient(
        135deg,
        hsla(0, 0%, 100%, 0.05) 1px,
        hsla(0, 0%, 100%, 0) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.03) 4px
      ),
      repeating-linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      repeating-linear-gradient(
        210deg,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 30% 30%,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 70% 70%,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 90% 20%,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 15% 80%,
        hsla(0, 0%, 100%, 0) 1px,
        hsla(0, 0%, 100%, 0.03) 2px,
        hsla(0, 0%, 100%, 0.04) 3px,
        hsla(0, 0%, 100%, 0.05) 4px
      ),
      linear-gradient(
        -25deg,
        hsla(0, 0%, 100%, 0) 50%,
        hsla(0, 0%, 100%, 0.2) 70%,
        hsla(0, 0%, 100%, 0) 90%
      );
    border-radius: 12px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &::before,
    &::after {
      position: absolute;
      border-radius: 50%;
      width: 32.25em;
      height: 32.25em;
      content: ' ';
      z-index: 1;
    }

    &::after {
      right: -11.188em;
      top: -19.875em;
      left: 2.188em;
      box-shadow: -1px 1px 1px hsla(0, 0%, 100%, 0.06);
      background: rgba(58, 58, 58, 0.03);
    }
    &::before {
      top: 2.875em;
      left: -11em;
      background: rgba(0, 0, 0, 0.06);
    }
  `}
`

interface ContentProps {
  status: boolean
}

export const Front = styled(CardStyle)`
  ${({ status }: ContentProps) => css`
    z-index: ${status === false ? '1' : '0'};
    transform: ${status === false ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  `}
`

export const Back = styled(CardStyle)`
  ${({ status }: ContentProps) => css`
    z-index: ${status === true ? '1' : '0'};
    transform: ${status === true ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  `}
`

export const Head = styled.div`
  padding: 32px 32px 0;
`

export const Detail = styled.div`
  width: 50px;
  height: 35px;
  border-radius: 5px;
  background: #cebd9e;
  box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.15);
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 70%;
    height: 60%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #b5a890;
    position: absolute;
    top: 20%;
  }
`

const brandModifiers = (value: string) => {
  if (value === 'master')
    return css`
      background-image: var(--brand-mastercard);
    `
  if (value === 'visa')
    return css`
      background-image: var(--brand-visa);
    `
  if (value === 'amex')
    return css`
      background-image: var(--brand-amex);
      background-position: 100%;
    `
  if (value === 'hipercard')
    return css`
      background-image: var(--brand-hipercard);
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    `
}

type BrandProps = {
  issuer?: string
}

export const Brand = styled.div`
  ${({ issuer }: BrandProps) => css`
    right: 8%;
    top: 24px;
    position: absolute;
    background-size: cover;
    width: 70px;
    height: 54px;
    display: flex;

    ${!!issuer && brandModifiers(issuer)}
  `}
`

export const Column = styled.div`
  z-index: 2;
`

export const ColumnOne = styled(Column)`
  margin: 0 0 auto;
`

export const ColumnTwo = styled(Column)`
  padding: 0 20px 8px;
`

export const ColumnTree = styled(Column)`
  color: #ffffff;
  padding: 0 22px 18px;
  font-size: 19px;
  font-family: var(--font-oswald);
  font-weight: 100;
  word-spacing: 6px;
  display: flex;
`

export const ColumnFour = styled(Column)``

export const ColumnFive = styled(Column)`
  height: 32px;
  display: flex;
  margin: 16px 22px 0;
`

const Text = styled.div`
  transition: color 0.3s ease-in, opacity 0.3s;
  background-color: #f7f7f7;
  background: -webkit-linear-gradient(top, #999 0.1em, #fff 0.7em);
  /* background: linear-gradient(180deg, #999 0.1em, #fff 0.7em); */
  /* -webkit-filter: drop-shadow(0 1px 1px #000); */
  /* filter: drop-shadow(0 1px 1px black); */
  -webkit-background-clip: text;
  -ms-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -ms-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`

export type StatusProps = {
  status: boolean
  opacityStatus: boolean
}

export const Number = styled(Text)`
  ${({ status, opacityStatus }: StatusProps) => css`
    color: #ffffff;
    font-family: var(--font-lato);
    font-size: 24px;
    word-spacing: 2px;
    font-weight: 500;
    opacity: ${opacityStatus ? '0.8' : '0.5'};
    transform: ${status ? 'translate3d(0, 0, 0)' : 'translate3d(0, 14px, 0)'};

    &::after {
      content: ${status ? '' : '"**** **** **** ****"'};
      font-size: 36px;
      top: 14px;
    }
  `}
`

export const Name = styled(Text)`
  ${({ status, opacityStatus }: StatusProps) => css`
    text-transform: uppercase;
    font-weight: 500;
    opacity: ${opacityStatus ? '0.8' : '0.5'};

    &::after {
      content: ${status ? '' : '"Nome e sobrenome"'};
    }
  `}
`

export const Expiration = styled.div`
  margin-left: auto;
`

export const Month = styled(Text)`
  ${({ status, opacityStatus }: StatusProps) => css`
    float: left;
    font-weight: 500;
    opacity: ${opacityStatus ? '0.8' : '0.5'};

    &::after {
      content: ${status ? '' : '"MM"'};
    }
  `}
`

export const Slash = styled(Text)`
  float: left;
  font-weight: 500;
  opacity: 0.5;

  &::after {
    content: '/';
  }
`

export const Year = styled(Text)`
  ${({ status, opacityStatus }: StatusProps) => css`
    float: left;
    font-weight: 500;
    opacity: ${opacityStatus ? '0.8' : '0.5'};

    &::after {
      content: ${status ? '' : '"AA"'};
    }
  `}
`

export const Black = styled.div`
  height: 42px;
  background: rgba(0, 0, 0, 0.85);
  margin: 26px 0 0;
`

export const Lines = styled.div`
  width: 100%;
  background-color: #ffffff;
  background-image: linear-gradient(#fff 50%, #d3d3d3 50%);
  background-size: 4px 4px;
`

export const Code = styled.div`
  color: #333;
  background: -webkit-linear-gradient(216deg, #f2f2f2, #fff);
  background: linear-gradient(234deg, #f2f2f2, #fff);
  position: relative;
  width: 60px;

  &::after {
    content: '';
    border-radius: 50%;
    border: 3px solid #f04449;
    display: block;
    position: absolute;
    left: 5px;
    top: -4.5px;
    height: 40px;
    width: 40px;
  }
`

export const CodeNumber = styled.span`
  ${({ status, opacityStatus }: StatusProps) => css`
    width: 100%;
    height: 100%;
    display: block;
    line-height: 32px;
    text-align: center;
    font-family: var(--font-oswald);
    opacity: ${opacityStatus ? '0.8' : '0.5'};

    &::after {
      content: ${status ? '' : '"***"'};
      font-size: 26px;
      position: relative;
      top: 6.5px;
    }
  `}
`

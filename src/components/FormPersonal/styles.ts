import styled, { css } from 'styled-components'

interface WrapperProps {
  status: number
}

const wrapperModifiers = {
  display: (data: number) => css`
    display: ${data === 1 ? 'block' : 'none'};
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

interface InputProps {
  status: boolean
}

export const Input = styled.input`
  ${({ status }: InputProps) => css`
    width: 100%;
    background: rgba(255, 255, 255, 0);
    padding: 10.5px 0px;
    display: block;
    font-weight: 400;
    color: #797979;
    font-size: 1.75rem;
    border: 1px solid #dadce0;
    font-family: var(--font-poppins);
    text-indent: 1.4rem;
    position: relative;
    z-index: 1;

    border-radius: 3px;

    &[disabled] {
      color: #797979;
      background: #efefef;

      & ~ label {
        border-radius: 3px;
      }
    }

    &::placeholder {
      color: #bfbfbf;
    }

    &:focus {
      border: 1px solid #1273eb;
    }

    ${status && `& ~ label,`}
    &:focus ~ label {
      padding: 0 1rem;
      font-size: 0.8em;
      background: rgba(255, 255, 255);
      z-index: 3;
      top: -8px;
    }

    &:focus ~ label {
      color: rgba(18, 115, 235);
    }
  `}
`

export const Label = styled.label`
  color: #676767;
  font-weight: 300;
  position: absolute;
  font-size: 1.6rem;
  top: 15px;
  left: 13px;
`

interface GroupProps {
  spaceBottom?: string
  spaceRight?: string
}

export const Group = styled.div`
  ${({ spaceBottom = '1.6rem', spaceRight = '1.6rem' }: GroupProps) => css`
    position: relative;
    display: flex;

    &:not(:last-child) {
      margin-bottom: ${spaceBottom};
    }

    & > *:not(:last-child) {
      margin-right: ${spaceRight};
    }

    & * {
      transition: all 0.2s ease-in-out 0s;
    }
  `}
`

interface FlexProps {
  minWidth?: string
}

export const Flex = styled.div`
  ${({ minWidth }: FlexProps) => css`
    width: 100%;
    display: flex;
    position: relative;
    min-width: ${minWidth};
  `}
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  color: #fff;
  padding: 0 2rem;
  min-height: 40px;
  background-color: #0161cd;
  font-weight: 500;
  white-space: nowrap;
  float: right;

  border-radius: 3px;

  &:hover {
    background: #0e75e8;
  }

  &:active {
    background: #00f;
  }

  &:focus {
    box-shadow: rgba(151, 200, 255) 0px 0px 4px 2px;
  }
`

export const Terms = styled.div`
  align-items: center;
  display: flex;
  color: #999;
  margin-right: 1.6rem;

  &,
  button {
    font-size: 1.4rem;
    font-weight: 100;
  }

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`

export const Termbox = styled.div`
  position: relative;
  display: flex;

  & input {
    &:checked ~ label::before {
      color: #fff;
      border-color: rgba(25, 145, 107, 0.3);
      background-color: rgba(25, 145, 107, 0.6);
    }

    &:checked ~ label::after {
      background-color: #fff;
      -webkit-transform: translateX(2.2rem);
      transform: translateX(2.2rem);
    }

    & ~ label::after {
      background-color: #aebcca;
      border-radius: 1.5rem;
      -webkit-transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      transition: transform 0.15s ease-in-out,
        background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
      transition: transform 0.15s ease-in-out,
        background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    }

    &:not(:disabled):active ~ label::before {
      color: #fff;
      border-color: #75e7c3;
      background-color: #75e7c3;
    }

    &:focus:not(:checked) ~ label::before {
      border-color: #4ae0b0;
    }

    &:focus ~ label::before {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(25, 145, 107, 0.25);
      box-shadow: 0 0 0 0.2rem rgba(25, 145, 107, 0.25);
    }
  }

  & label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    @media (max-width: 720px) {
      color: rgba(0, 0, 0, 0.65);
      font-weight: 700;
      font-style: italic;
    }

    & {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    &:not(:last-child) {
      margin-right: 1.2rem;
    }

    &::before {
      pointer-events: all;
      border-radius: 1.8rem;
      float: left;
    }

    &::before {
      -webkit-transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
      transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
      transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    }

    &::before {
      display: block;
      width: 5rem;
      height: 2.4rem;
      pointer-events: none;
      content: '';
      background-color: #fff;
      border: #aebcca solid 1px;
    }

    &::after {
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      display: block;
      width: 2rem;
      height: 1.6rem;
      content: '';
      background: no-repeat 50% / 50% 50%;
    }
  }
`

export const Help = styled.button`
  color: #7ba9d6;
  text-decoration: underline;
  text-align: left;
`

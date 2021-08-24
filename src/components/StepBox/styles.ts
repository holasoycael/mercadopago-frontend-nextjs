import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background: #ededed;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px #e0e0e0;
  margin: 0 0 22px;
`

export const Content = styled.div`
  font-family: var(--font-open);
  position: relative;
  display: flex;
`

type StepProps = {
  status: number
}

export const Step = styled.div`
  ${({ status }: StepProps) => css`
    width: ${status === 1
      ? '33.333333333%'
      : status === 2
      ? '66.666666666%'
      : status === 3
      ? '100%'
      : '0'};
    position: absolute;
    height: 100%;
    background: transparent;
    transition: width 0.5s;
    z-index: 0;

    &::after,
    &::before {
      content: '';
      transition: all 0.5s;
    }

    &::before {
      position: absolute;
      background: #ffffff;
      display: block;
      width: ${status !== 3 ? 'calc(100% - 32px)' : '100%'};
      height: 62px;
      top: 0;
      border-radius: 3px 0 0 3px;
    }

    &::after {
      float: left;
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
      border-style: solid;
      border-width: ${status !== 3 ? '32px 0 30px 32px' : '0'};
    }
  `}
`

export const Li = styled.li`
  width: 100%;
  padding: 12px 0;
  z-index: 1;
`

export const Rouded = styled.span`
  color: #fff;
  background: #639bd0;
  line-height: 38px;
  text-align: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: block;
  float: left;
  font-weight: 500;
  font-size: 18px;
`

export const Text = styled.span`
  line-height: 38px;
  padding-left: 12px;
  color: #616161;
  font-weight: 400;
  font-family: var(--font-poppins);
  font-size: 16px;
`

export const Button = styled.button`
  display: flex;
  padding-left: 18px;
  align-items: center;
  cursor: default;
`

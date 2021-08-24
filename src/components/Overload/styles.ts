import styled, { css } from 'styled-components'

type WrapperProps = {
  zIndex?: string
  backgroundColor?: string
}

export const Wrapper = styled.div`
  ${({
    zIndex = '5',
    backgroundColor = 'rgba(255,255,255,0.5)'
  }: WrapperProps) => css`
    z-index: ${zIndex};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    overflow: hidden;
    outline: 0;
    margin-bottom: 0 !important;

    &::after {
      content: '';
      background: ${backgroundColor};
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
`

export const Content = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  z-index: 2;
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 56px;
  height: 100%;
  position: relative;
  z-index: 1;
`

const Child = styled.div`
  width: 12px;
  height: 12px;
  background-color: #c61e10;
  border-radius: 100%;
  display: inline-block;
  animation: treo-bouncedelay 1s infinite ease-in-out both;
`

export const B1 = styled(Child)`
  animation-delay: -0.32s !important;
`

export const B2 = styled(Child)`
  animation-delay: -0.16s !important;
`

export const B3 = styled(Child)``

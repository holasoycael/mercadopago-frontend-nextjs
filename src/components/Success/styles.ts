import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Head = styled.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
`

export const Success = styled.div`
  color: #fff;
  background: #5ac857;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: initial;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`

export const Title = styled.h3`
  font-size: 2.6rem;
  text-align: center;
  letter-spacing: -2px;
  margin: 0 0 10px;
`

export const Text = styled.p`
  max-width: 80%;
  margin: 0 auto 22px;
  text-align: center;
  font-size: 1.4rem;
  float: none;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
`

export const Keycode = styled.span`
  color: #fff;
  background: #898989;
  padding: 0.7rem 1rem;
  border-radius: 8px;
`

export const Support = styled.div`
  flex-direction: column;
  align-items: center;
`

export const Sub = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

export const Button = styled.button`
  color: #fff;
  background: #2bbe76;
  text-align: center;
  border-width: 0 0 2px;
  padding: 4px 2rem;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  font-weight: 500;
  letter-spacing: 0.4px;
  border-radius: 3px;
`

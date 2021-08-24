import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 278px;
`

export const Content = styled.div`
  font-family: var(--font-lato);
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`

export const Head = styled.div`
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 0.3px;
  padding: 16px;
  border-bottom: 1px solid #f3f3f3;
  font-family: var(--font-lato);
  overflow: hidden;
`

export const Title = styled.span`
  color: #5d5c5c;
  margin: 0 12px 0 0;
  display: inline-block;
`

export const Pricebox = styled.div`
  background: #fafafa;
  border-bottom: 1px solid #f3f3f3;
  padding: 16px 0;
`

export const Price = styled.span`
  line-height: 38px;
  font-size: 38px;
  font-weight: 100;
  width: 100%;
  text-align: center;
  color: #333;
  display: block;
`

export const Coin = styled.span`
  margin: 6px 0 0;
  font-size: 16px;
  font-weight: 100;
  width: 100%;
  text-align: center;
  color: #333;
  display: block;
`

export const About = styled.div`
  padding: 16px;
  font-family: var(--font-poppins);
  font-size: 1.3rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Name = styled.h2`
  color: #5d5c5c;
  font-size: 1.6rem;
`

export const Description = styled.p`
  color: #5d5c5c;
  font-size: 1.4rem;
  float: left;
  width: 100%;
`

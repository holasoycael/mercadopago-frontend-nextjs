import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
  display: flex;
`

export const Href = styled.a`
  color: #000;
  padding: 1rem 2.4rem;
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.15) 14%,
    rgba(0, 0, 0, 0) 98%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.15) 14%,
    rgba(0, 0, 0, 0) 98%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.15) 14%,
    rgba(0, 0, 0, 0) 98%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#26000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  min-height: 62px;
  height: 100%;
`

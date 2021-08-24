import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1056px;
  margin: auto;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  display: flex;

  & > * {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-right: 2.2rem;
  }
`

export const Main = styled.main`
  flex-direction: column;
  display: flex;
`

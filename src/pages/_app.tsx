import Script from 'next/script'
import type { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import StyledContainer from 'styles/toastify-default'

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js" />
      <GlobalStyles />
      <StyledContainer />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

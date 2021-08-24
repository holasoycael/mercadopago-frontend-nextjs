import Mercadopago from './index'

declare global {
  interface Window {
    Mercadopago: Mercadopago
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetCreateToken } from './createToken'
import { GetInstallments } from './getInstallments'
import { GetPaymentMethod } from './getPaymentMethod'

export default interface Mercadopago {
  AJAX: (t: any) => void
  clearSession: () => void
  createDeviceProvider: (n: any) => void
  createToken: GetCreateToken
  deviceProfileId: string
  getAllPaymentMethods: (t: any) => any
  getIdentificationTypes: () => any
  getInstallments: GetInstallments
  getIssuers: (e: any) => Promise<any>
  getPaymentMethod: GetPaymentMethod
  getPaymentMethods: (e: any) => Promise<any>
  initMercadopago: () => void
  initialized: boolean
  initializedInsights: boolean
  key: string
  referer: string
  sessionId: any
  setPaymentMethods: (e: any) => void
  setPublishableKey: (key: string) => void
  tokenId: string
  validateBinPattern: (e: any, t: any) => boolean
  validateCardNumber: (e: any, t: any, n: any) => void
  validateCardholderName: (e: any) => boolean
  validateExpiryDate: (e: any, t: any) => boolean
  validateIdentification: (e: any, t: any) => boolean
  validateLuhn: (e: any) => boolean
  validateSecurityCode: (e: any, t: any, n: any) => any
  version: string
}

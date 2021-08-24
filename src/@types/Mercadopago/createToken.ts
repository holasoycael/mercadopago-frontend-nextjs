export type GetCreateToken = (
  settings: HTMLFormElement,
  callback: CallbackGetCreateToken
) => CallbackGetCreateToken

export type CallbackGetCreateToken = (
  status: number,
  response: ISuccessRequest & IBadRequest
) => void

interface ISuccessRequest {
  card_number_length: number
  cardholder: {
    identification: {
      number: string
      type: string
    }
    name: string
  }
  date_created: string
  date_due: string
  date_last_updated: string
  expiration_month: number
  expiration_year: number
  first_six_digits: string
  id: string
  last_four_digits: string
  live_mode: boolean
  luhn_validation: boolean
  public_key: string
  require_esc: boolean
  security_code_length: number
  status: string
}

interface IBadRequest {
  cause: ICauseBadRequest[]
  error: string
  message: string
}

interface ICauseBadRequest {
  code: string
  description: string
}

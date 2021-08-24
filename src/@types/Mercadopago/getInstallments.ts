export type GetInstallments = (
  settings: {
    bin: string
    amount: number
  },
  callback: CallbackGetInstallments
) => CallbackGetInstallments

export type CallbackGetInstallments = (
  status: number,
  response: Array<{
    agreements: null // NOTE: o valor para agreements é desconhecido
    issuer: {
      id: string
      name: string
      secure_thumbnail: string
      thumbnail: string
    }
    merchant_account_id: null // NOTE: o valor para merchant_account_id é desconhecido
    payer_costs: Array<{
      discount_rate: number
      installment_amount: number
      installment_rate: number
      installment_rate_collector: string[]
      installments: number
      labels: [] // NOTE: o valor para labels é desconhecido
      max_allowed_amount: number
      min_allowed_amount: number
      payment_method_option_id: string
      recommended_message: string
      reimbursement_rate: null // NOTE: o valor para reimbursement_rate é desconhecido
    }>
    payment_method_id: string
    payment_type_id: string
  }>
) => void

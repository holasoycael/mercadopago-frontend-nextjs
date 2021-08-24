import { toast } from 'react-toastify'

type IMercadopagoErrorStatusProps = (value: string) => void

const MercadopagoErrorStatus: IMercadopagoErrorStatusProps = (value) => {
  if (value === '011') {
    toast.error('Sua chamada expirou, tente novamente!')
    window.Mercadopago.clearSession()
  } else if (value === '205') {
    toast.warn('Digite o número do seu cartão')
  } else if (value === '208') {
    toast.warn('Escolha um mês')
  } else if (value === '209') {
    toast.warn('Escolha um ano')
  } else if (value === '212') {
    toast.warn('Informe seu documento')
  } else if (value === '213') {
    toast.warn('Informe seu documento')
  } else if (value === '214') {
    toast.warn('Informe seu documento')
  } else if (value === '220') {
    toast.warn('Informe seu banco emissor')
  } else if (value === '221') {
    toast.warn('Digite o nome e sobrenome')
  } else if (value === '224') {
    toast.warn('Digite o código de segurança')
  } else if (value === 'E301') {
    toast.warn('O número do cartão está errado ou inválido')
  } else if (value === 'E302') {
    toast.warn('Confira o código de segurança')
  } else if (value === '316') {
    toast.warn('Por favor, digite um nome válido')
  } else if (value === '322') {
    toast.warn('Confira seu documento')
  } else if (value === '323') {
    toast.warn('Confira seu documento')
  } else if (value === '324') {
    toast.warn('Confira seu documento')
  } else if (value === '325') {
    toast.warn('Confira a data')
  } else if (value === '326') {
    toast.warn('Confira a data')
  } else {
    toast.error('Confira os dados')
  }
}

export default MercadopagoErrorStatus

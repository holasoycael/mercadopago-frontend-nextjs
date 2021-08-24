type GenerateCardNumberProps = (value: string) => string

const GenerateCardNumber: GenerateCardNumberProps = (value) => {
  if (value.length <= 8) {
    return value.replace(/(\d{4})/gi, '$1 ')
  } else if (value.length <= 12) {
    return value.replace(/(\d{4})(\d{4})/gi, '$1 $2 ')
  } else if (value.length <= 16) {
    return value.replace(/(\d{4})(\d{4})(\d{4})/gi, '$1 $2 $3 ')
  } else {
    return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/gi, '$1 $2 $3 $4 ')
  }
}

export default GenerateCardNumber

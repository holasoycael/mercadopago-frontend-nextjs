function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validateName(name: string) {
  return name.trim().replace(/\s+/g, ' ').split(' ').length >= 2
}

type IValidPersonalFormData = {
  display_name: string
  e_mail: string
  e_mail_valid: string
}
type IValidPersonalForm = (data: IValidPersonalFormData) => boolean

const ValidPersonalForm: IValidPersonalForm = ({
  e_mail,
  display_name,
  e_mail_valid
}) => {
  return (
    validateEmail(e_mail) &&
    validateName(display_name) &&
    e_mail === e_mail_valid
  )
}

export default ValidPersonalForm

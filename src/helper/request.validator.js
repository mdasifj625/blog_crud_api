const RequestValidator = (DTO, data = {}) => {
  const validationResult = DTO.validate(data)
  if (validationResult.error) {
    const errors = []
    for (let i = 0; i < validationResult.error.details.length; i++) {
      errors.push(validationResult.error.details[i].message)
    }
    validationResult.errors = errors
  }
  return validationResult
}
export default RequestValidator

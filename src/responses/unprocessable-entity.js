export default function (data = {}) {
  const statusCode = 422
  const {
    message = 'Unprocessable Entity.',
    error = null,
    errors = null,
    item = null,
    items = null,
  } = data

  const resultant = {
    error: {
      message: message,
      statusCode,
      errors: errors ? errors : error ? [error] : undefined,
      items: items ? items : item ? [item] : undefined,
    },
  }

  // All Done
  return this.status(statusCode).json(resultant)
}

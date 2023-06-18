export default function (data = {}) {
  const statusCode = 201
  const { message = 'Created.', token, item = null, items = null } = data

  const resultant = {
    data: {
      message,
      statusCode,
      token,
      items: items ? items : item ? [item] : undefined,
    },
  }

  // All Done
  return this.status(statusCode).json(resultant)
}

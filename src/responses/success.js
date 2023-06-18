export default function (data = {}) {
  const statusCode = 200
  const {
    message = 'Success.',
    token,
    items = null,

    // Pagination Related Fields
    totalItems,
    startIndex,
    itemsPerPage,
  } = data

  const resultant = {
    data: {
      message,
      token,
      statusCode,

      // Pagination Related Fields
      totalItems,
      startIndex,
      itemsPerPage,

      items: items ? items : undefined,
    },
  }

  // All Done
  return this.status(statusCode).json(resultant)
}

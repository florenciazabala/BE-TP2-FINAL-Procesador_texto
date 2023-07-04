class BusinessError extends Error {
    constructor(message) {
      super(message)
      this.name = 'BusinessError'
      Error.captureStackTrace(this, BusinessError)
    }
}
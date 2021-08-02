export class DuplicatedProductSerialNumberError extends Error {
  constructor (public readonly message: string) {
    super(message)
    this.name = 'DuplicatedProductSerialNumberError'
  }
}

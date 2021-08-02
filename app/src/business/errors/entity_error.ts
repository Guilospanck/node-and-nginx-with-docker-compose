export class EntityError extends Error {
  constructor (public readonly message: string) {
    super(message)
    this.name = 'EntityError'
  }
}

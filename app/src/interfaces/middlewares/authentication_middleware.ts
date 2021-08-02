import { HttpRequest, HttpResponse, success, unauthorized } from '@shared/http'
import { IBaseMiddleware } from '@shared/ibase_middleware'

export class AuthenticationMiddleware implements IBaseMiddleware {
  constructor () {}

  public handler (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.headers['x-authorization']) {
      return unauthorized({})
    }

    const token = httpRequest.headers['x-authorization']
    const API_DEFAULT_TOKEN = process.env.API_DEFAULT_TOKEN as string

    if (token !== API_DEFAULT_TOKEN) {
      return unauthorized({})
    }

    return success({})
  }
}

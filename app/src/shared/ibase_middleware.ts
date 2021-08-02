import { HttpRequest, HttpResponse } from '@shared/http'

export interface IBaseMiddleware {
  handler (req: HttpRequest): HttpResponse
}

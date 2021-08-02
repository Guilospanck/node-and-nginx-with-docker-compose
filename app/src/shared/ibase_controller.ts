import { HttpRequest, HttpResponse } from '@shared/http'

export interface IBaseController {
  handler (httpRequest: HttpRequest): Promise<HttpResponse>
}

import { Request, Response } from 'express'
import { HttpRequest } from '@shared/http'
import { IBaseController } from '@shared/ibase_controller'

export const RouteAdapt = (controller: IBaseController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      headers: req.headers,
      body: req.body
    }

    const resolve = await controller.handler(httpRequest)

    res.status(resolve.statusCode).header(resolve.headers).json(resolve.body)
  }
}

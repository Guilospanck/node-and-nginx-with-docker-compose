import { Request, Response, NextFunction } from 'express'
import { HttpRequest } from '@shared/http'
import { IBaseMiddleware } from '@shared/ibase_middleware'

export const MiddlewareAdapt = (middleware: IBaseMiddleware) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers,
      body: req.body
    }

    const resolve = middleware.handler(httpRequest)

    if (resolve.statusCode >= 400) {
      return res.status(resolve.statusCode).header(resolve.headers).json(resolve.body)
    }

    return next()
  }
}

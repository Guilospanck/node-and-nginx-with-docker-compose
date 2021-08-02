import express, { Application, Router } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from '../swagger/swagger'

export class HttpServer {
  private _server: Application

  constructor () {
    this._server = express()
  }

  public init (): void {
    this._server.use(cors())
    this._server.use(helmet())
    this._server.use(compression())
    this._server.use(express.json())
    /** Change to other strategy latter */
    this._server.use(rateLimit({
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 1000 // limit each IP to 1000 requests per windowMs
    }))
    /** */
    this._server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }

  public registerRoute (route: Router) {
    this._server.use(route)
  }

  listening (): void {
    const PORT = process.env.PORT
    this._server.listen(PORT, () => console.log(`Server running and listening on: 127.0.0.1:${PORT}`))
  }
}

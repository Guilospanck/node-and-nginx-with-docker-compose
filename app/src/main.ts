import { Environment } from '@infrastructure/environments/environments'
import { HttpServer } from '@infrastructure/http_server/http_server'
import { routes } from './router'

(function bootstrap () {
  Environment.register()

  const httpServer = new HttpServer()

  httpServer.init()
  httpServer.registerRoute(routes)
  httpServer.listening()
})()

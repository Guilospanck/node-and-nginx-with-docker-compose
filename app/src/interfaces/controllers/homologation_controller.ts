import { ProductionSensorsDTO } from '@business/dtos/production_sensors_dto'
import { IBaseController } from '@shared/ibase_controller'
import { HttpRequest, HttpResponse, badRequest, created, unsupportedMediaType } from '@shared/http'

export class HomologationController implements IBaseController {
  public async handler (request: HttpRequest<any, ProductionSensorsDTO>): Promise<HttpResponse> {
    const body = request.body

    if (!body || Array.isArray(body)) {
      return badRequest()
    }

    const selfTest = String(body.selfTest)
    if (!body.mac || !body.raw || !body.rssi || !body.temp || !body.maxTemp || !body.voltage || !selfTest || !body.productionSerialNumber) {
      return unsupportedMediaType({ body: { message: 'wrong body' } })
    }

    return created()
  }
}

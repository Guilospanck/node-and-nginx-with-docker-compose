import { ProductionSensorsDTO } from '@business/dtos/production_sensors_dto'
import { ProductionSensor } from '@business/entities/production_sensor'
import { ISensorsProductionUsecase } from '@business/usecases/isensors_production_usecase'

import { IBaseController } from '@shared/ibase_controller'
import { HttpRequest, HttpResponse, badRequest, created, unsupportedMediaType, internalServerError, conflict } from '@shared/http'
import { DuplicatedProductSerialNumberError } from '@business/errors/duplicated_product_serial_number_error'

export class ProductionController implements IBaseController {
  constructor (
    private readonly sensorsProductionUsecase: ISensorsProductionUsecase
  ) {}

  public async handler (request: HttpRequest<any, ProductionSensorsDTO>): Promise<HttpResponse> {
    const body = request.body

    if (!body || Array.isArray(body)) {
      return badRequest()
    }

    const productionSensor = ProductionSensor.create({ sensor: body })
    if (productionSensor.isLeft()) {
      return unsupportedMediaType()
    }

    const result = await this.sensorsProductionUsecase.register(productionSensor.value)
    if (result.isLeft()) {
      console.error(result.value)

      if (result.value instanceof DuplicatedProductSerialNumberError) {
        return conflict()
      }
      return internalServerError()
    }

    return created()
  }
}

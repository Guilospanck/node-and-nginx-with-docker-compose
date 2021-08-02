import { IGetAllSensorsUsecase } from '@business/usecases/iget_all_sensors_usecase'

import { IBaseController } from '@shared/ibase_controller'
import { HttpRequest, HttpResponse, success, internalServerError } from '@shared/http'

export class GetAllSensorsController implements IBaseController {
  constructor (private readonly _gerAllSensorsUsecase: IGetAllSensorsUsecase) {}

  public async handler (_: HttpRequest): Promise<HttpResponse> {
    const result = await this._gerAllSensorsUsecase.getAllSensors()
    if (result.isLeft()) {
      return internalServerError()
    }

    return success({ body: result.value })
  }
}

import { SensorDTO } from '@business/dtos/sensor_dto'
import { IGetAllSensorsUsecase } from '@business/usecases/iget_all_sensors_usecase'
import { BaseError } from '@shared/base_error'
import { Either, left, right } from '@shared/either'
import { ISensorsRepository } from './interfaces/isensors_repository'

export class GetAllSensorsUsecase implements IGetAllSensorsUsecase {
  constructor (private readonly _sensorRepository: ISensorsRepository) {}
  public async getAllSensors (): Promise<Either<BaseError, SensorDTO[] | []>> {
    const result = await this._sensorRepository.getAllSensors()
    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}

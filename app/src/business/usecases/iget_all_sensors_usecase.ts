import { SensorDTO } from '@business/dtos/sensor_dto'
import { BaseError } from '@shared/base_error'
import { Either } from '@shared/either'

export interface IGetAllSensorsUsecase {
  getAllSensors(): Promise<Either<BaseError, SensorDTO[] | []>>
}

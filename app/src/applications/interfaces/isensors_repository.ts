import { Sensor } from '@business/entities/sensor'
import { BaseError } from '@shared/base_error'
import { Either } from '@shared/either'

export interface ISensorsRepository {
  getSensorsByOriginalMac: (mac: string) => Promise<Either<BaseError, Sensor | null>>
  getSensorByProductionSerialNumber: (prodSerialNumber: string) => Promise<Either<BaseError, Sensor | null>>
  getAllSensors: () => Promise<Either<BaseError, Sensor[] | []>>
  createSensor: (sensor: Sensor) => Promise<Either<BaseError, boolean>>
  updateSensor: (sensor: Sensor) => Promise<Either<BaseError, boolean>>
}

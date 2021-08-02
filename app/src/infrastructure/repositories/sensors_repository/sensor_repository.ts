import { Sensor } from '@business/entities/sensor'
import { ISensorsRepository } from '@applications/interfaces/isensors_repository'
import { SensorModel } from '../../database/models/sensor_model'

import { Either, left, right } from '@shared/either'
import { BaseError } from '@shared/base_error'

export class SensorRepository implements ISensorsRepository {
  public async getSensorsByOriginalMac (mac: string): Promise<Either<BaseError, Sensor | null>> {
    try {
      const sensor = await SensorModel.findOne({ where: { bleOriginalMac: mac } })
      return right(sensor as any)
    } catch (err) {
      return left(err)
    }
  }

  public async getSensorByProductionSerialNumber (prodSerialNumber: string): Promise<Either<BaseError, Sensor | null>> {
    try {
      const sensor = await SensorModel.findOne({ where: { productionSerialNumber: prodSerialNumber } })
      return right(sensor as any)
    } catch (err) {
      return left(err)
    }
  }

  public async getAllSensors (): Promise<Either<BaseError, Sensor[] | []>> {
    try {
      const sensors = await SensorModel.findAll()
      if (!sensors.length) {
        return right([])
      }
      return right(sensors as any)
    } catch (err) {
      return left(err)
    }
  }

  public async createSensor (sensor: Sensor): Promise<Either<BaseError, boolean>> {
    try {
      await SensorModel.create(sensor)
    } catch (err) {
      return left(err)
    }
    return right(true)
  }

  public async updateSensor (sensor: Sensor): Promise<Either<BaseError, boolean>> {
    try {
      await SensorModel.update(sensor, { where: { id: sensor.id } })
    } catch (err) {
      return left(err)
    }
    return right(true)
  }
}

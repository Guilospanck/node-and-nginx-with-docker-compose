import { ProductionSensorsDTO } from '@business/dtos/production_sensors_dto'
import { BaseError } from '@shared/base_error'
import { Either, left, right } from '@shared/either'

export class ProductionSensor {
  private constructor (
    public readonly mac: string,
    public readonly rssi: number,
    public readonly raw: string,
    public readonly temp: number,
    public readonly maxTemp: number,
    public readonly voltage: number,
    public readonly selfTest: number,
    public readonly productionSerialNumber: string
  ) {}

  static create ({ sensor }: {sensor: ProductionSensorsDTO}): Either<BaseError, ProductionSensor> {
    const selfTest = String(sensor.selfTest)
    if (!sensor.mac || !sensor.raw || !sensor.rssi || !sensor.temp || !sensor.maxTemp || !sensor.voltage || !selfTest || !sensor.productionSerialNumber) {
      return left(new Error(''))
    }

    return right(new ProductionSensor(sensor.mac, sensor.rssi, sensor.raw, sensor.temp, sensor.maxTemp, sensor.voltage, sensor.selfTest, sensor.productionSerialNumber))
  }
}

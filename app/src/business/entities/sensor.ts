import { SensorDTO } from '@business/dtos/sensor_dto'
import { EntityError } from '@business/errors/entity_error'
import { BaseError } from '@shared/base_error'
import { Either, left, right } from '@shared/either'

export class Sensor {
  private constructor (
    public readonly id: number | undefined = undefined,
    public readonly bleOriginalMac: string,
    public readonly model: string,
    public readonly protocolVersion: string,
    public readonly hardware: string,
    public readonly firmware: string,
    public readonly battery: string,
    public readonly encapsulation: string,
    public readonly peripherals: string,
    public readonly manufacturer: string | undefined = undefined,
    public readonly productionBatch: string | undefined = undefined,
    public readonly productionSerialNumber: string,
    public readonly temp: number,
    public readonly maxTemp: number,
    public readonly voltage: number,
    public readonly selfTest: number | undefined
  ) {}

  static create (params: SensorDTO): Either<BaseError, Sensor> {
    if (params === null || params === undefined) {
      return left(new EntityError('Params are required'))
    }

    return right(
      new Sensor(
        params.id,
        params.bleOriginalMac,
        params.model,
        params.protocolVersion,
        params.hardware,
        params.firmware,
        params.battery,
        params.encapsulation,
        params.peripherals,
        params.manufacturer,
        params.productionBatch,
        params.productionSerialNumber,
        params.temp,
        params.maxTemp,
        params.voltage,
        params.selfTest
      )
    )
  }
}

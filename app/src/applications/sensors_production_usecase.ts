import { ProductionSensor } from '@business/entities/production_sensor'
import { Sensor } from '@business/entities/sensor'
import { DuplicatedProductSerialNumberError } from '@business/errors/duplicated_product_serial_number_error'
import { ISensorsProductionUsecase } from '@business/usecases/isensors_production_usecase'

import { BaseError } from '@shared/base_error'
import { Either, left, right } from '@shared/either'
import { ISensorsRepository } from './interfaces/isensors_repository'

export class SensorsProductionUsecase implements ISensorsProductionUsecase {
  constructor (private readonly sensorsRepository: ISensorsRepository) {}

  public async register (productionSensor: ProductionSensor): Promise<Either<BaseError, boolean>> {
    const registeredSensor = await this.sensorsRepository.getSensorsByOriginalMac(productionSensor.mac)

    if (registeredSensor.isRight() && registeredSensor.value) {
      return this.updateRegisteredSensor(
        { ...productionSensor, productionSerialNumber: registeredSensor.value.productionSerialNumber },
        registeredSensor.value.id as number
      )
    }

    return this.registerSensor(productionSensor)
  }

  private async updateRegisteredSensor (productionSensor: ProductionSensor, id: number): Promise<Either<BaseError, boolean>> {
    const sensor = Sensor.create({
      id: id,
      ...productionSensor,
      bleOriginalMac: productionSensor.mac,
      model: 'H1 - test',
      protocolVersion: 'testv1.1',
      hardware: 'test-',
      firmware: 'test-V1.1',
      battery: 'Bateria Test',
      encapsulation: 'testck',
      peripherals: 'Testerno, KX 122'
    })
    if (sensor.isLeft()) {
      return left(sensor.value)
    }
    const result = await this.sensorsRepository.updateSensor(sensor.value)
    if (result.isLeft()) {
      return left(result.value)
    }
    return right(true)
  }

  private async registerSensor (productionSensor: ProductionSensor): Promise<Either<BaseError, boolean>> {
    const isDuplicatedProductionSerialNumber = await this.sensorsRepository.getSensorByProductionSerialNumber(productionSensor.productionSerialNumber)
    if (isDuplicatedProductionSerialNumber.isRight() && isDuplicatedProductionSerialNumber.value) {
      return left(new DuplicatedProductSerialNumberError(''))
    }
    const sensor = Sensor.create({
      ...productionSensor,
      bleOriginalMac: productionSensor.mac,
      model: 'test',
      protocolVersion: 'vtest',
      hardware: 'ntest',
      firmware: 'test-V1.1',
      battery: 'Bateria test',
      encapsulation: 'test Black',
      peripherals: 'test'
    })

    if (sensor.isLeft()) {
      return left(sensor.value)
    }

    const result = await this.sensorsRepository.createSensor(sensor.value)
    if (result.isLeft()) {
      return left(result.value)
    }
    return right(true)
  }
}

import { ProductionSensor } from '@business/entities/production_sensor'

import { BaseError } from '@shared/base_error'
import { Either } from '@shared/either'

export interface ISensorsProductionUsecase {
  register: (productionSensor: ProductionSensor) => Promise<Either<BaseError, boolean>>
}

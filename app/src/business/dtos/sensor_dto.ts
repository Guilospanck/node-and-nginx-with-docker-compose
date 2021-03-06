export interface SensorDTO {
  id?: number,
  bleOriginalMac: string,
  model: string,
  protocolVersion: string,
  hardware: string,
  firmware: string,
  battery: string,
  encapsulation: string,
  peripherals: string,
  manufacturer?: string | undefined,
  productionBatch?: string | undefined,
  productionSerialNumber: string,
  temp: number,
  maxTemp: number,
  voltage: number,
  selfTest: number | undefined,
}

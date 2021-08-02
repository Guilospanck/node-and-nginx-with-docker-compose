import { Sensor } from '@business/entities/sensor'
import Sequelize, { Model } from 'sequelize'
import { dbConnection } from '../connection'

class SensorModel extends Model<Sensor> {}

SensorModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bleOriginalMac: {
      type: Sequelize.STRING,
      field: 'ble_original_mac'
    },
    model: {
      type: Sequelize.STRING
    },
    protocolVersion: {
      type: Sequelize.STRING,
      field: 'protocol_version'
    },
    hardware: {
      type: Sequelize.STRING
    },
    firmware: {
      type: Sequelize.STRING
    },
    battery: {
      type: Sequelize.STRING
    },
    encapsulation: {
      type: Sequelize.STRING
    },
    peripherals: {
      type: Sequelize.STRING
    },
    manufacturer: {
      type: Sequelize.STRING
    },
    productionBatch: {
      type: Sequelize.STRING,
      field: 'production_batch'
    },
    productionSerialNumber: {
      type: Sequelize.STRING,
      field: 'production_serial_number'
    },
    temp: {
      type: Sequelize.FLOAT
    },
    maxTemp: {
      type: Sequelize.FLOAT,
      field: 'max_temp'
    },
    voltage: {
      type: Sequelize.FLOAT
    },
    selfTest: {
      type: Sequelize.INTEGER,
      field: 'self_test'
    }
  },
  {
    tableName: 'sensors',
    sequelize: dbConnection
  }
)

export { SensorModel }

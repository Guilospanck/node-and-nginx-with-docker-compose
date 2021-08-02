module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sensors', 'self_test', { type: Sequelize.INTEGER, allowNull: true })
    return queryInterface.addColumn('sensors', 'production_serial_number', { type: Sequelize.STRING, allowNull: true })
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sensors', 'self_test')
    return queryInterface.removeColumn('sensors', 'production_serial_number')
  }
}

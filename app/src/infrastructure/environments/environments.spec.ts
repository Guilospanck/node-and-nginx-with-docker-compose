import dotEnv from 'dotenv'
import { Environment } from './environments'

jest.mock('dotenv', () => ({
  config: jest.fn()
}))

describe('Environment', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should invoke dotenv config method with called Environment.register', () => {
    Environment.register()
    expect(dotEnv.config).toHaveBeenCalledTimes(1)
    expect(dotEnv.config).toHaveBeenCalledWith({ path: '.env.development' })
  })
})

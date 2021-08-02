export default {
  swagger: '2.0',
  info: {
    description: 'This is Test API documentation',
    version: '1.0.0',
    title: 'TEST API',
    contact: {
      email: 'contato@test.com.br'
    }
  },
  host: 'host.com.br',
  basePath: '/',
  tags: [
    {
      name: 'Send Data',
      description: 'Receive Test devices data',
      externalDocs: {
        description: 'Find out more',
        url: 'https://github.com/test/test_process_data_js'
      }
    }
  ],
  schemes: [
    'https',
    'http'
  ],
  paths: {
    '/sendata': {
      post: {
        tags: [
          'Send Data'
        ],
        summary: 'Receive TEST devices data',
        description: '',
        operationId: 'Send Data',
        consumes: [
          'application/json'
        ],
        produces: [
          'application/json'
        ],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'TEST Post Data',
            required: true,
            schema: {
              $ref: '#/definitions/Senddata'
            }
          }
        ],
        responses: {
          200: {
            description: 'Success'
          }
        }
      }
    }
  },
  definitions: {
    Senddata: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: [
              'health',
              'temp',
              'rms2',
              'rmms',
              'tilt',
              'fft',
              'accRaw'
            ]
          },
          data: {
            $ref: '#/definitions/Data'
          }
        }
      }
    },
    Data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          mac: {
            type: 'string'
          },
          rssi: {
            type: 'number'
          },
          raw: {
            type: 'string'
          },
          time: {
            type: 'number',
            description: 'Timestamp with time zone in seconds - GMT 0'
          }
        }
      }
    }
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io'
  }
}

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'), {
        alias: {
          '@applications': './src/applications',
          '@business': './src/business',
          '@infrastructure': './src/infrastructure',
          '@interfaces': './src/interfaces',
          '@presenters': './src/presenters',
          '@shared': './src/shared'
        }
      }
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ],
  ignore: [
    '**/*.spec.ts',
    '**/__test__'
  ]
}

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const { shareAll } = require('@angular-architects/module-federation/webpack');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'remote-app-1',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteApp',
      filename: 'remoteAppEntry.js',
      exposes: {
        './Module': 'apps/remote-app-1/src/app/remote-entry/entry.module.ts',
      },
      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        }),
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};

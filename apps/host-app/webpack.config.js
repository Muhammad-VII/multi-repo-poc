const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host-app',
  // remotes: { Disabled cuz we are using dynamic federation
  //   remoteApp1: 'remoteApp1@http://localhost:4300/remoteEntry.js',
  // },
  shared: {
    ...shareAll({ singleton: false, strictVersion: true, requiredVersion: 'auto' }),
  },

});

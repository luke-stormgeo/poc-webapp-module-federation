const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'graph',

  /* exposes: {
    './GraphModule': './projects/graph/src/app/graph/graph.module.ts',
  }, */

  exposes: {
    './GraphModule': './projects/graph/src/bootstrap.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

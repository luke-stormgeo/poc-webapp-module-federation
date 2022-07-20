const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'table',

  exposes: {
    './TableModule': './projects/table/src/app/table/table.module.ts',
    './FooterComponent': './projects/table/src/app/footer/footer.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

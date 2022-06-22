import { shareAll, withModuleFederationPlugin } from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  remotes: {
    // "mfe1": "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

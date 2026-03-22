import type { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nxdmfmf-remote-a',
  exposes: {
    './Routes': 'apps/nxdmfmf-remote-a/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

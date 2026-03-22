import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

export default async (baseConfig: unknown) => {
  const withMF = await withModuleFederation({ ...config }, { dts: false });
  return withMF(baseConfig as Record<string, unknown>);
};

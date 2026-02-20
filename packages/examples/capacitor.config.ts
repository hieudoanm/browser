import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.github.hieudoanm.browser',
  appName: '@browser/examples',
  webDir: '../../docs',
  android: { path: 'mobile/android' },
  ios: { path: 'mobile/ios' },
};

export default config;

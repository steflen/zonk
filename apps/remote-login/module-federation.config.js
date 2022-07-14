module.exports = {
  name: 'remote-login',
  exposes: {
    './Module': 'apps/remote-login/src/app/remote-entry/entry.module.ts',
  },
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // worklets: false — disables react-native-worklets/plugin injection since this
      // project does not use react-native-reanimated and react-native-worklets@0.7.4
      // has an empty "exports" field that blocks Metro's strict subpath resolution.
      ['babel-preset-expo', { jsxImportSource: 'nativewind', worklets: false }],
      'nativewind/babel',
    ],
  };
};

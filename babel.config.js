module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // worklets: false — react-native-reanimated (peer dep of react-native-css-interop)
      // pulls in react-native-worklets@0.7.4 which has an empty "exports:{}" field,
      // making react-native-worklets/plugin unresolvable via Metro's strict subpath resolver.
      // Disabling it here is safe since this project does not use reanimated animations.
      ['babel-preset-expo', { jsxImportSource: 'nativewind', worklets: false }],
      // Safe replacement for 'nativewind/babel': react-native-css-interop@0.2.2/babel.js
      // unconditionally registers "react-native-worklets/plugin" as a Babel string plugin,
      // crashing when react-native-reanimated is not installed. This local preset includes
      // only the css-interop babel plugin; the JSX transform is already handled by
      // babel-preset-expo via jsxImportSource:'nativewind' (→ react-native-css-interop/jsx-runtime).
      './babel-preset-nativewind-safe',
    ],
  };
};

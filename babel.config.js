module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      // Safe replacement for 'nativewind/babel': react-native-css-interop@0.2.2/babel.js
      // unconditionally registers "react-native-worklets/plugin" as a Babel string plugin,
      // crashing when react-native-reanimated is not installed. This local preset includes
      // only the css-interop babel plugin; the JSX transform is already handled by
      // babel-preset-expo via jsxImportSource:'nativewind' (→ react-native-css-interop/jsx-runtime).
      './babel-preset-nativewind-safe',
    ],
  };
};

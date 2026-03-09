// Replaces 'nativewind/babel' (which resolves to react-native-css-interop/babel.js v0.2.2).
// That file unconditionally registers "react-native-worklets/plugin" as a Babel string plugin,
// which crashes when react-native-reanimated is not installed.
// This preset includes only the parts that are actually needed:
//   - react-native-css-interop/dist/babel-plugin  → className → style prop transformation
// The JSX transform (jsxImportSource) is already handled by babel-preset-expo via
// jsxImportSource:'nativewind', which resolves to react-native-css-interop/jsx-runtime anyway.
module.exports = function () {
  return {
    plugins: [
      require('react-native-css-interop/dist/babel-plugin').default,
    ],
  };
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          root: "./",
          extensions: [".tsx", ".js", ".ts"],
          alias: {
            app: "./app",
          },
        },
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
  };
};

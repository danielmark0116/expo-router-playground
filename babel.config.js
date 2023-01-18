module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
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

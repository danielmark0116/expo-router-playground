import { Stack } from "expo-router/stack";

export default () => (
  <Stack
    screenOptions={{
      gestureEnabled: false,
      headerBackTitle: "",
    }}
  />
);

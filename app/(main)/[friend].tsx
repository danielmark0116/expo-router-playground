import { View, Text } from "react-native";
import { Stack } from "expo-router";

const Page = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
          gestureDirection: "vertical",
        }}
      />
      <Text>{route.params.friend}</Text>
    </View>
  );
};

export default Page;

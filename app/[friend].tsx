import { Text, View } from "react-native";
import { Stack, useSearchParams } from "expo-router";

const Page = () => {
  const { friend } = useSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: friend }} />
      <Text>{friend}</Text>
    </View>
  );
};

export default Page;

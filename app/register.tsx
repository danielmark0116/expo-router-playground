import { View } from "react-native";
import { Text } from "app/components/Text";

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello World!</Text>

      <Text>Register your account in order to use the app</Text>
    </View>
  );
};

export default Page;

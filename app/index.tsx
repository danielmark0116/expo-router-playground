import { Stack } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { Text } from "app/components/Text";

const friendsList = ["Joey", "Chandler", "Monica", "Rachel", "Phoebe", "Ross"];

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Friends App" }} />
      {friendsList.map((friend) => (
        <TouchableOpacity key={friend}>
          <Text>{friend}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Page;

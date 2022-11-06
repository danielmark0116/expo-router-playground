import { View, Text, TouchableOpacity } from "react-native";
import { useLink, Stack } from "expo-router";

const friends = ["Joey", "Phoebe", "Rachel", "Chandler", "Ross", "Monica"];

const Page = () => {
  const link = useLink();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Friends List" }} />

      {friends.map((friend) => (
        <TouchableOpacity
          key={friend}
          onPress={() => {
            link.push(`(main)/${friend}`);
          }}
        >
          <Text>{friend}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Page;

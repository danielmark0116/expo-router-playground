import { useRouter } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../components/Text";

const friendsList = ["Joey", "Chandler", "Monica", "Rachel", "Phoebe", "Ross"];

const Page = () => {
  const { push } = useRouter();

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {friendsList.map((friend) => (
        <TouchableOpacity
          key={friend}
          onPress={() => {
            push(`/${friend}`);
          }}
        >
          <Text>{friend}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Page;

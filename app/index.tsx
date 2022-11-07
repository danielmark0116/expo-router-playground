import { View, Text } from "react-native";

const friendsList = ["Joey", "Chandler", "Monica", "Rachel", "Phoebe", "Ross"];

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {friendsList.map((friend) => (
        <Text key={friend}>{friend}</Text>
      ))}
    </View>
  );
};

export default Page;

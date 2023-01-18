import { Text } from "app/components/Text";
import { Drawer } from "app/navigation/Drawer";
import { TouchableOpacity, View } from "react-native";

export default (props: typeof Drawer["defaultProps"]) => {
  return (
    <Drawer
      screenOptions={{
        title: "",
        swipeEnabled: false,
      }}
      drawerContent={() => (
        <View style={{ flex: 1, justifyContent: "center", padding: 8 }}>
          <Text>Hi!</Text>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      {...props}
    />
  );
};

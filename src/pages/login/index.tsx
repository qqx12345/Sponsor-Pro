import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Login() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <Text>loginPage</Text>
    </View>
  );
}

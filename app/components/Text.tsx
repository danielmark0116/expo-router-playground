import { Text as _Text, TextProps } from "react-native";

export const Text = ({ children, ...textProps }: TextProps) => {
  return (
    <_Text {...textProps} style={{ fontWeight: "bold", fontSize: 24 }}>
      {children}
    </_Text>
  );
};

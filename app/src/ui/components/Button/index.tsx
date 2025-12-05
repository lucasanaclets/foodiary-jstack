import { Platform, Pressable, View } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./styles";

interface IButtonProps extends React.ComponentProps<typeof Pressable> {}

export function Button({ children, ...props }: IButtonProps) {
  const childrenElement =
    typeof children === "string" ? (
      <AppText weight="medium">{children}</AppText>
    ) : (
      children
    );

  return (
    <View style={styles.wrapper}>
      <Pressable
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS === "ios" && { opacity: 0.7 },
        ]}
        {...props}
      >
        {childrenElement}
      </Pressable>
    </View>
  );
}

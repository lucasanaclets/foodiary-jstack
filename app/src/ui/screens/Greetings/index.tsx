import { AppText } from "@ui/components/AppText";
import { ImageBackground } from "react-native";
import greetingsBg from "@ui/assets/greetings-bg/image.png";
import { styles } from "./styles";
import { Logo } from "@ui/components/Logo";

export function Greetings() {
  return (
    <ImageBackground
      source={greetingsBg}
      resizeMode="cover"
      style={styles.container}
    >
      <Logo width={187} height={60} />
    </ImageBackground>
  );
}

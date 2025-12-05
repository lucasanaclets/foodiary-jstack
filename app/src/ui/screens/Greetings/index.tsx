import { ImageBackground } from "react-native";
import greetingsBg from "@ui/assets/greetings-bg/image.png";
import { styles } from "./styles";
import { Logo } from "@ui/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

export function Greetings() {
  return (
    <ImageBackground
      source={greetingsBg}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView>
        <Logo />
      </SafeAreaView>
    </ImageBackground>
  );
}

import { ImageBackground } from "react-native";
import greetingsBg from "@ui/assets/greetings-bg/image.png";
import { styles } from "./styles";
import { Logo } from "@ui/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@ui/components/Button";

export function Greetings() {
  return (
    <ImageBackground
      source={greetingsBg}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView>
        <Logo />
        <Button>Criar minha conta</Button>
      </SafeAreaView>
    </ImageBackground>
  );
}

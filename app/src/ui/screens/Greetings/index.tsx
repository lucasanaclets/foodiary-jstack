import { ImageBackground, TouchableOpacity, View } from "react-native";
import greetingsBg from "@ui/assets/greetings-bg/image.png";
import { styles } from "./styles";
import { Logo } from "@ui/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@ui/components/Button";
import { AppText } from "@ui/components/AppText";
import { theme } from "@ui/styles/theme";
import { SignInBottomSheet } from "@ui/components/SignInBottomSheet";
import { useRef } from "react";
import { ISignInBottomSheet } from "@ui/components/SignInBottomSheet/ISignInBottomSheet";

export function Greetings() {
  const signInBottomSheetRef = useRef<ISignInBottomSheet>(null);

  return (
    <>
      <ImageBackground
        source={greetingsBg}
        resizeMode="cover"
        style={styles.container}
      >
        <SafeAreaView style={styles.content}>
          <Logo />
          <View style={styles.ctaContainer}>
            <AppText
              style={styles.heading}
              color={theme.colors.white}
              size="3xl"
              weight="semiBold"
            >
              Controle sua dieta de forma simples
            </AppText>

            <View style={styles.ctaContent}>
              <Button>Criar conta</Button>

              <View style={styles.signInContainer}>
                <AppText color={theme.colors.white}>Já tem uma conta?</AppText>
                <TouchableOpacity
                  onPress={() => signInBottomSheetRef.current?.open()}
                >
                  <AppText color={theme.colors.lime[500]} weight="medium">
                    Acesse a sua conta
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <SignInBottomSheet ref={signInBottomSheetRef} />
    </>
  );
}

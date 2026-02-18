import { OnboardingStack } from "@app/navigation/OnboardingStack";
import { AppText } from "@ui/components/AppText";
import { View } from "react-native";
import { OnboardingProvider } from "./context/OnboardingProvider";

export function Onboarding() {
  return (
    <OnboardingProvider>
      <View style={{ flex: 1 }}>
        <AppText size="3xl" weight="semiBold">
          Onboarding
        </AppText>
        <OnboardingStack />
      </View>
    </OnboardingProvider>
  );
}

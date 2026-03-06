import { OnboardingStack } from "@app/navigation/OnboardingStack";
import { theme } from "@ui/styles/theme";
import { KeyboardAvoidingView, Platform } from "react-native";
import { OnboardingHeader } from "./components/OnboardingHeader";
import { OnboardingProvider } from "./context/OnboardingProvider";

export function Onboarding() {
  return (
    <OnboardingProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: theme.colors.white }}
      >
        <OnboardingHeader />
        <OnboardingStack />
      </KeyboardAvoidingView>
    </OnboardingProvider>
  );
}

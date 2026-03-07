import { OnboardingStack } from "@app/navigation/OnboardingStack";
import { zodResolver } from "@hookform/resolvers/zod";
import { theme } from "@ui/styles/theme";
import { FormProvider, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";
import { OnboardingHeader } from "./components/OnboardingHeader";
import { OnboardingProvider } from "./context/OnboardingProvider";
import { onboardingSchema } from "./schema";

export function Onboarding() {
  const form = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      birhDate: new Date(),
      height: "",
      weight: "",
      account: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    },
  });

  return (
    <FormProvider {...form}>
      <OnboardingProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, backgroundColor: theme.colors.white }}
        >
          <OnboardingHeader />
          <OnboardingStack />
        </KeyboardAvoidingView>
      </OnboardingProvider>
    </FormProvider>
  );
}

import { AppText } from "@ui/components/AppText";
import { Button } from "@ui/components/Button";
import { View } from "react-native";
import { useOnboarding } from "../context/useOnboarding";

export function GoalStep() {
  const { currentStepIndex, nextStep, previousStep } = useOnboarding();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AppText size="3xl" weight="semiBold">
        GoalStep
      </AppText>
      <View>
        <Button onPress={previousStep}>Voltar</Button>
        <AppText>{currentStepIndex}</AppText>
        <Button onPress={nextStep}>Avançar</Button>
      </View>
    </View>
  );
}

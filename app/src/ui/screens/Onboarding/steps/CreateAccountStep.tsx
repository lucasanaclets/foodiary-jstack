import { Button } from "@ui/components/Button";
import { FormGroup } from "@ui/components/FormGroup";
import { Input } from "@ui/components/Input";
import { useRef } from "react";
import { Alert, TextInput, View } from "react-native";
import {
  Step,
  StepContent,
  StepFooter,
  StepHeader,
  StepSubtitle,
  StepTitle,
} from "../components/Step";

export function CreateAccountStep() {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  function handleSubmit() {
    Alert.alert("Enviar");
  }

  return (
    <Step>
      <StepHeader>
        <StepTitle>Crie sua conta</StepTitle>
        <StepSubtitle>Para poder visualizar seu progresso</StepSubtitle>
      </StepHeader>

      <StepContent>
        <View style={{ gap: 24 }}>
          <FormGroup label="Nome" style={{}}>
            <Input
              placeholder="João Silva"
              autoCapitalize="words"
              autoCorrect={false}
              autoComplete="name"
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
              autoFocus
            />
          </FormGroup>

          <FormGroup label="E-mail" style={{}}>
            <Input
              ref={emailInputRef}
              placeholder="joaosilva@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />
          </FormGroup>

          <FormGroup label="Senha" style={{}}>
            <Input
              ref={passwordInputRef}
              placeholder="Mínimo 8 caracteres"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="new-password"
              secureTextEntry
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />
          </FormGroup>

          <FormGroup label="Confirmar Senha" style={{}}>
            <Input
              ref={confirmPasswordInputRef}
              placeholder="Mínimo 8 caracteres"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="new-password"
              secureTextEntry
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
            />
          </FormGroup>
        </View>
      </StepContent>

      <StepFooter align="start">
        <Button onPress={handleSubmit}>Criar conta</Button>
      </StepFooter>
    </Step>
  );
}

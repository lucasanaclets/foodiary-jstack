import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { AppText } from "../AppText";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { ISignInBottomSheet } from "./ISignInBottomSheet";
import { styles } from "./styles";
import { useSignInBottomSheetController } from "./useSignInBottomSheetController";

interface ISignInBottomSheetProps {
  ref: React.Ref<ISignInBottomSheet>;
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
  const { handleSubmit, form, bottomSheetModalRef, passwordInputRef, bottom } =
    useSignInBottomSheetController(ref);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bottomSheetModalRef}>
        <BottomSheetView style={[styles.container, { paddingBottom: bottom }]}>
          <AppText size="3xl" weight="semiBold" style={styles.heading}>
            Acesse a sua conta
          </AppText>

          <View style={styles.form}>
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormGroup label="E-mail" error={fieldState.error?.message}>
                  <Input
                    value={field.value}
                    onChangeText={field.onChange}
                    InputComponent={BottomSheetTextInput}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="email"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                  />
                </FormGroup>
              )}
            />
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormGroup label="Senha" error={fieldState.error?.message}>
                  <Input
                    value={field.value}
                    onChangeText={field.onChange}
                    ref={passwordInputRef}
                    InputComponent={BottomSheetTextInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="current-password"
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                    secureTextEntry
                  />
                </FormGroup>
              )}
            />

            <Button onPress={handleSubmit}>Entrar</Button>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

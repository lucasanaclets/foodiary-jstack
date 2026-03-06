import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";
import { Alert, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ISignInBottomSheet } from "./ISignInBottomSheet";
import { signInSchema } from "./schema";

export function useSignInBottomSheetController(
  ref: React.Ref<ISignInBottomSheet>,
) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { bottom } = useSafeAreaInsets();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit((formData) => {
    Alert.alert(`email: ${formData.email}, senha: ${formData.password}`);
  });

  useImperativeHandle(
    ref,
    () => ({
      open: () => bottomSheetModalRef.current?.present(),
    }),
    [],
  );

  return { handleSubmit, form, bottomSheetModalRef, passwordInputRef, bottom };
}

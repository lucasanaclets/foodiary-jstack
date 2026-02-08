import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useImperativeHandle, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ISignInBottomSheet } from "./ISignInBottomSheet";
import { Alert, TextInput } from "react-native";

export function useSignInBottomSheetController(
  ref: React.Ref<ISignInBottomSheet>,
) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { bottom } = useSafeAreaInsets();

  useImperativeHandle(
    ref,
    () => ({
      open: () => bottomSheetModalRef.current?.present(),
    }),
    [],
  );

  function handleSubmit() {
    Alert.alert("form send");
  }

  return { handleSubmit, bottomSheetModalRef, passwordInputRef, bottom };
}

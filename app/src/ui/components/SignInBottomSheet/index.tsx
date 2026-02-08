import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { AppText } from "../AppText";
import { useSignInBottomSheetController } from "./useSignInBottomSheetController";
import { ISignInBottomSheet } from "./ISignInBottomSheet";
import React from "react";
import { Input } from "../Input";
import { styles } from "./styles";

interface ISignInBottomSheetProps {
  ref: React.Ref<ISignInBottomSheet>;
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
  const { bottomSheetModalRef, bottom } = useSignInBottomSheetController(ref);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={bottomSheetModalRef}>
        <BottomSheetView style={{ paddingBottom: bottom }}>
          <AppText size="3xl" weight="semiBold" style={styles.heading}>
            Acesse a sua conta
          </AppText>

          <Input placeholder="E-mail" disabled />
          <Input placeholder="Senha" />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

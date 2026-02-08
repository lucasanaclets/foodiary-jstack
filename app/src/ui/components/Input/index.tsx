import { TextInput, BlurEvent, FocusEvent } from "react-native";
import { inputStyles } from "./styles";
import { theme } from "@ui/styles/theme";
import React, { useState } from "react";

interface IInputProps extends BaseTextInputProps {
  error?: boolean;
  disabled?: boolean;
}

type BaseTextInputProps = Omit<
  React.ComponentProps<typeof TextInput>,
  "readOnly"
>;

export function Input({
  style,
  onFocus,
  onBlur,
  error,
  disabled,
  ...props
}: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: BlurEvent) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <TextInput
      placeholderTextColor={theme.colors.gray[700]}
      style={[
        inputStyles({
          status: error ? "error" : isFocused ? "focus" : "default",
          disabled: disabled ? "true" : "false",
        }),
        style,
      ]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly={disabled}
      {...props}
    />
  );
}

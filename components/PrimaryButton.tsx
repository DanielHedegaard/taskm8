import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";

type Props = {
  label?: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function PrimaryButton({ label, onPress, loading, disabled }: Props) {
  return (
    <Button
        mode="contained"
        onPress={onPress}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#10213A",
    width: "100%", // full width of parent
    paddingVertical: 6,
  },
  buttonLabel: {
    fontSize: 16,
    color: "white",
  },
});
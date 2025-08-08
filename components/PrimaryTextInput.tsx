import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
};

export default function PrimaryTextInput({
  label,
  value,
  onChangeText,
}: Props) {
  return (
    <TextInput
      label={label}
      mode="flat"
      style={styles.input}
      outlineColor="#10213A"
      activeOutlineColor="#10213A"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: "white",
    borderColor: "black",
  },
});

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { CONTENT_WIDTH, RADIUS } from "../../../constants/sizes";
import ButtonText from "../../texts/ButtonText/ButtonText";

interface ButtonProps {
  onPress: () => void;
  text: string;
}

const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ButtonText text={text} />
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: COLORS.primary,
    alignSelf: "flex-start",
    borderRadius: RADIUS,
    width: CONTENT_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});

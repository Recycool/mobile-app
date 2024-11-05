import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { CONTENT_WIDTH, RADIUS } from "../../../constants/sizes";
import ButtonText from "../../texts/ButtonText/ButtonText";

interface ButtonProps {
  disabled?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
}

const Button = ({ disabled, onPress, style, text }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[{ ...styles.container, opacity: disabled ? 0.4 : 1 }, style]}
      onPress={onPress}
    >
      <ButtonText color={COLORS.white} text={text} />
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS,
    width: CONTENT_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
});

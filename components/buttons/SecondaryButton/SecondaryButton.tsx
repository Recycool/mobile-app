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

interface SecondaryButtonProps {
  disabled?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
}

const SecondaryButton = ({
  disabled,
  onPress,
  style,
  text,
}: SecondaryButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[{ ...styles.container, opacity: disabled ? 0.4 : 1 }, style]}
      onPress={onPress}
    >
      <ButtonText color={COLORS.primary} text={text} />
    </TouchableOpacity>
  );
};

export default SecondaryButton;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: COLORS.secondary,
    borderRadius: RADIUS,
    width: CONTENT_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});

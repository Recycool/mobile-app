import { StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/colors";

interface ButtonTextProps {
  text: string;
}

export default function ButtonText({ text }: ButtonTextProps) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontWeight: "400",
    fontFamily: "SF Pro Display",
  },
});

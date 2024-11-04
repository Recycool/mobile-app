import { StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/colors";

interface ButtonTextProps {
  text: string;
  color?: string;
}

export default function ButtonText({ text, color }: ButtonTextProps) {
  return <Text style={[styles.text, { color }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontWeight: "400",
    // fontFamily: "SF Pro Display",
  },
});

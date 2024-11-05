import { Dimensions, PixelRatio, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const WIDTH = width;
export const HEIGHT = height;
export const CONTENT_WIDTH = width * 0.9;
export const RADIUS = 24;

// Base width used for scaling
const baseWidth = 430;
const baseHeight = 932;

const scale = WIDTH / baseWidth;

// Utility functions for responsive sizing
export const responsiveUtils = {
  // Width based scaling
  w: (size: number) => {
    return PixelRatio.roundToNearestPixel(size * scale);
  },

  // Height based scaling
  h: (size: number) => {
    const heightScale = HEIGHT / baseHeight; // assuming iPhone X as base
    return PixelRatio.roundToNearestPixel(size * heightScale);
  },

  // Font scaling
  font: (size: number) => {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  },

  // Responsive padding/margin
  spacing: (size: number) => {
    return PixelRatio.roundToNearestPixel(size * scale);
  },
};

export default {
  WIDTH,
  HEIGHT,
  CONTENT_WIDTH,
  RADIUS,
};

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const WIDTH = width;
export const HEIGHT = height;
export const CONTENT_WIDTH = width * 0.9;
export const RADIUS = 24;

export default {
  WIDTH,
  HEIGHT,
  CONTENT_WIDTH,
  RADIUS,
};

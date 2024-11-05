import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import ButtonText from "./ButtonText";

const meta = {
  title: "ButtonText",
  component: ButtonText,
  args: {
    text: "Get Started",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ButtonText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: "Get Started",
  },
};

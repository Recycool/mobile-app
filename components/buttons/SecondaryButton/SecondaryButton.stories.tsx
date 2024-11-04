import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import SecondaryButton from "./SecondaryButton";

const meta = {
  title: "SecondaryButton",
  component: SecondaryButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SecondaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action("onPress"),
  },
};

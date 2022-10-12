import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Texto",
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    }
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Testando</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    }
  },
};

import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "outline", "disable", "small"],
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`, // Remplacez args.default par args.label
  }),
  args: {
    label: "Button", // Remplacez "default" par une prop nommée pour le contenu
  },
};

export const Outline: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
  args: {
    label: "Button",
    variant: "outline",
  },
};

export const Disable: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
  args: {
    label: "Button",
    variant: "disable",
  },
};

export const DisablePrimary: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
  args: {
    label: "Connexion",
    variant: "outline",
    disabled: true,
  },
};

export const SmallBTN: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
  args: {
    label: "Connexion",
    variant: "small",
  },
};

export const Long: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
  args: {
    label: "Connexion",
  },
};

export const GetStarted: StoryObj = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
  args: {
    label: "Get started",
    variant: "getstarted",
  },
};

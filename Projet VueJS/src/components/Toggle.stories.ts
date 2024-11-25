import type { Meta, StoryObj } from "@storybook/vue3";
import Toggle from "./Toggle.vue";

const meta: Meta<typeof Toggle> = {
  title: "Elements/Toggle",
  component: Toggle,
  argTypes: {
    initialState: {
      control: "boolean",
      description: "État initial du toggle (activé ou désactivé)",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Toggle v-bind="args" />
      </div>
    `,
  }),
  args: {
    initialState: false,
  },
};

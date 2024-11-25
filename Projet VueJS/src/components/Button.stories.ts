import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
      variant: {
          control: {type: 'select'} ,
          options: ['primary','outline','disable','small'] 
      }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`,
  }),
  args: {
    default: 'Button',
  },
};


export const Outline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">${args.default}</Button>`,
  }),
  args: {
    default: 'Button',
    variant: 'outline'
  },
};

export const Disable: Story = {
    render: (args) => ({
      components: { Button },
      setup() {
        return { args };
      },
      template: `<Button v-bind="args">${args.default}</Button>`,
    }),
    args: {
      default: 'Button',
      variant: 'disable'
    },
  };

  export const DisablePrimary: Story = {
    render: (args) => ({
      components: { Button },
      setup() {
        return { args };
      },
      template: `<Button v-bind="args">${args.default}</Button>`,
    }),
    args: {
      default: 'Connexion',
      variant: 'outline',
      disabled: true
    },
  };
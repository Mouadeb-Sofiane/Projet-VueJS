import type { Meta, StoryObj } from '@storybook/vue3';

import Item from './Item.vue';

const meta: Meta<typeof Item> = {
  title: 'Elements/Item',
  component: Item,
  argTypes: {
    name: { control: 'text', description: 'Name of the item' },
    description: { control: 'text', description: 'Description of the item' },
    price: { control: 'number', description: 'Price of the item' },
    image: { 
      control: 'object', 
      description: 'Image object containing URL and alt text',
      defaultValue: { url: 'https://via.placeholder.com/600*400', alt: 'Placeholder image' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: (args) => ({
    components: { Item },
    setup() {
      return { args };
    },
    template: `<Item v-bind="args" />`,
  }),
  args: {
    name: 'item par défaut',
    description: 'Ceci est la description de l\'item.',
    price: 25,
    image: { url: 'https://placehold.co/600x400', alt: 'Image de l\'item' },
  },
};





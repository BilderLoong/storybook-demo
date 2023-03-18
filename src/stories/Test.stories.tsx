
import type { Meta, StoryObj } from '@storybook/react';
import Test from './Test';

const meta: Meta<typeof Test> = {
    component: Test,
    parameters: {
    },
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Default: Story = {
    args: {}
};

import { Button, ButtonProps } from './Button';
import { Story } from '@storybook/react';

export default {
  title: 'components/Button',
  component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args}>Click me!</Button>;

export const Sample = Template.bind({});
Sample.args = { type: 'primary' };

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Switch, { Props } from './Switch';

type StoryProps = Props & {
  text: string;
};

export default {
  component: Switch,
  title: '01 - Basic Switch',
  // creates specific argTypes with options
  argTypes: {
    text: {
      defaultValue: 'Hello',
      control: {
        type: 'text',
      },
    },
    id: {
      defaultValue: 'id',
      control: {
        type: 'text',
      },
    },
    customIcon: {
      defaultValue: 'theme',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const SwitchStory: Story<StoryProps> = ({ text, id, customIcon }) => {
  return (
    <Switch id={id} customIcon={customIcon} onSwitch={action('switched')}>
      {text}
    </Switch>
  );
};

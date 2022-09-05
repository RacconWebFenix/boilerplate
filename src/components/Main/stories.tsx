import { Meta, Story } from '@storybook/react'
import Main from '.'
import React from 'react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'descriprion default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Main {...args} />

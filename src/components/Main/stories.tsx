import { withKnobs, text } from '@storybook/addon-knobs'
import { ComponentMeta, Story } from '@storybook/react'
import Main from '.'
import React from 'react'

export default {
  title: 'Main',
  component: 'Main',
  decorators: [withKnobs]
} as unknown as ComponentMeta<typeof Main>

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)

export const Secondary: Story = () => (
  <Main
    title={text('Title', 'React Avançado123')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)

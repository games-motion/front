import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

import { Button, IButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {},
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<IButtonProps>

export const Solid: StoryObj<IButtonProps> = {
  args: {
    children: 'Button',
    variant: 'solid',
  },
}

export const Ghost: StoryObj<IButtonProps> = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Outline: StoryObj<IButtonProps> = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Link: StoryObj<IButtonProps> = {
  args: {
    children: 'Button',
    variant: 'link',
  },
}

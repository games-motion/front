import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

import { InputProps } from '.'
import Component from '.'

export default {
  title: 'Components/Input',
  component: Component,
  args: {},
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<InputProps>

export const Input: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your email!',
  },
}

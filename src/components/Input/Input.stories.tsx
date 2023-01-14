import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

import { InputProps } from '../Input'
import { Input } from '../Input'

export default {
  title: 'Components/Input',
  component: Input,
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

export const Default: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your email!',
  },
}

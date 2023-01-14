import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { ProgressBar as Component, IProgressBarProps } from '.'

import { GlobalStyle } from '../../styles/global'
import { theme } from '../../styles/theme'

export default {
  title: 'Components/ProgressBar',
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
} as Meta<IProgressBarProps>

export const ProgressBar: StoryObj<IProgressBarProps> = {
  args: {
    championships: 12,
    quantity: 7,
  },
}

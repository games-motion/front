import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

import { CardNotify as Component } from '.'

export default {
  title: 'Components/CardNotify',
  component: Component,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

export const CardNotify: StoryObj = {}

import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import Component from '.'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Pages/Login',
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
} as Meta

export const Login: StoryObj = {}

import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

import { NextMatches as Component } from '.'

export default {
  title: 'Components/NextMatches',
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

export const NextMatches: StoryObj = {}

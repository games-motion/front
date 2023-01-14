import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { LastPublications as Component } from '.'

import { theme } from '../../styles/theme'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Components/LastPublications',
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

export const LastPublications: StoryObj = {}

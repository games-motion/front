import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/global'
import { theme } from '../../styles/theme'

import { ProfileDetails as Component } from '.'

export default {
  title: 'Components/ProfileDetails',
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

export const ProfileDetails: StoryObj = {}

import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../../styles/global'
import { theme } from '../../../styles/theme'

import { Tooltip as Component, IToplTipProps } from '.'
import { Button } from '../../../components/Button'

export default {
  title: 'Components/Tooltip',
  component: Component,
  args: {
    title: 'Hi im tooltip 🤗',
    children: <Button variant="solid">Hover me!</Button>,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<IToplTipProps>

export const Tooltip: StoryObj<IToplTipProps> = {}

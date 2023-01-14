import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { CardMember as Component, ICardMemberProps } from '.'

import { GlobalStyle } from '../../styles/global'
import { theme } from '../../styles/theme'

export default {
  title: 'Components/CardMember',
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
} as Meta<ICardMemberProps>

export const CardMember: StoryObj<ICardMemberProps> = {
  args: {
    avatar: 'https://res.cloudinary.com/dlf01tbs6/image/upload/v1670283656/5225004_whehlp.png',
    nickname: 'whyy',
    username: 'Icaro Vieira',
  },
}

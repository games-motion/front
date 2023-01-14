import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { theme } from '../../styles/theme'

import { CardMember } from '.'

describe('<CardMember />', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardMember
          avatar="https://github.com/IcaroSilvaFK.png"
          username="Icaro Vieira"
          nickname="whyy"
          isCoach={false}
          isOwner={false}
        />
      </ThemeProvider>
    )

    const element = screen.getByRole('listitem')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(/whyy/i)
  })
})

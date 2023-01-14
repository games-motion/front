import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { NextMatches } from '.'

import { theme } from '../../styles/theme'

describe('<NextMatches />', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <NextMatches />
      </ThemeProvider>
    )

    const element = screen.getByRole('banner')

    expect(element).toBeInTheDocument()
  })

  it('should render heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <NextMatches />
      </ThemeProvider>
    )

    const element = screen.getByRole('heading')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(/Próximas Partidas/i)
  })

  it('should render list', () => {
    render(
      <ThemeProvider theme={theme}>
        <NextMatches />
      </ThemeProvider>
    )

    const element = screen.getByRole('list')

    expect(element).toBeInTheDocument()
  })
})

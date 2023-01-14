import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import { theme } from '../../styles/theme'

import { LastPublications } from '.'

describe('<LastPublications />', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <LastPublications />
      </ThemeProvider>
    )

    const element = screen.getByRole('banner')

    expect(element).toBeInTheDocument()
  })

  it('should render title section', () => {
    render(
      <ThemeProvider theme={theme}>
        <LastPublications />
      </ThemeProvider>
    )

    const element = screen.getByRole('heading')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(/Ultimas Publicações/i)
  })

  it('should render list news', () => {
    render(
      <ThemeProvider theme={theme}>
        <LastPublications />
      </ThemeProvider>
    )

    const element = screen.getByRole('list')

    expect(element).toBeInTheDocument()
  })
})

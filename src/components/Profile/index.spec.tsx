import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Profile } from '.'
import { theme } from '../../styles/theme'

describe('<Profile />', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    )

    const element = screen.getByRole('banner')

    expect(element).toBeInTheDocument()
  })

  it('should render image', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    )

    const element = screen.getByRole('img')

    expect(element).toBeInTheDocument()
  })

  it('should render username', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    )

    const element = screen.getByText(/Icaro Vieira/i)

    expect(element).toBeInTheDocument()
  })

  it('should render list games', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    )

    const element = screen.getByRole('list')

    expect(element).toBeInTheDocument()
  })
})

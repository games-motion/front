import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { theme } from '../../styles/theme'

import { Button } from '.'

const mockFunction = vi.fn()

describe('<Button/> ', () => {
  it('Should  render button component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid">Button</Button>
      </ThemeProvider>
    )

    const element = screen.getByRole('button')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(/button/i)
  })

  it('Should called on click function', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid" onClick={mockFunction}>
          Button
        </Button>
      </ThemeProvider>
    )

    const element = screen.getByText(/button/i)

    act(() => {
      element.click()
    })

    expect(mockFunction).toHaveBeenCalled()
  })

  it('should background blue by solid variant', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid" onClick={mockFunction}>
          Button
        </Button>
      </ThemeProvider>
    )

    const element = screen.getByText(/button/i)

    expect(element).toHaveStyle({
      background: theme.colors.brand['blue-500'],
    })
  })

  it('should background transparent by ghost variant', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="ghost" onClick={mockFunction}>
          Button
        </Button>
      </ThemeProvider>
    )

    const element = screen.getByText(/button/i)

    expect(element).toHaveStyle({
      background: 'transparent',
    })
  })

  it('should background transparent by link variant', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="link" onClick={mockFunction}>
          Button
        </Button>
      </ThemeProvider>
    )

    const element = screen.getByText(/button/i)

    expect(element).toHaveStyle({
      background: 'transparent',
    })
  })

  it('should background transparent and have outline by outline variant', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="outline" onClick={mockFunction}>
          Button
        </Button>
      </ThemeProvider>
    )

    const element = screen.getByText(/button/i)

    expect(element).toHaveStyle({
      background: 'transparent',
      outline: `1px solid ${theme.colors.brand['blue-500']}`,
      color: theme.colors.brand['blue-500'],
    })
  })
})

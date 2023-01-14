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
})

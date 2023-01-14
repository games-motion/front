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

    const buttonText = screen.getByText(/button/i)
    const buttonRole = screen.getByRole('button')

    expect(buttonText).toBeInTheDocument()
    expect(buttonRole).toBeInTheDocument()
  })

  it('Should called on click function', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="solid" onClick={mockFunction}>
          Button
        </Button>
      </ThemeProvider>
    )

    const buttonText = screen.getByText(/button/i)

    act(() => {
      buttonText.click()
    })

    expect(mockFunction).toHaveBeenCalled()
  })
})

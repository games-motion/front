import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { theme } from '../../styles/theme'

import { Input } from '.'

describe('<Input />', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="input" />
      </ThemeProvider>
    )

    const element = screen.getByRole('textbox')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('placeholder')
  })

  it('should type input', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="input" />
      </ThemeProvider>
    )

    const element = screen.getByRole('textbox')

    await userEvent.type(element, 'Hello world')

    expect(element).toBeInTheDocument()
    expect(element).toHaveValue('Hello world')
  })

  it('should clear value', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="input" />
      </ThemeProvider>
    )

    const element = screen.getByRole('textbox')

    await userEvent.clear(element)

    expect(element).toBeInTheDocument()
    expect(element).toHaveValue('')
  })
})

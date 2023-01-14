import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { theme } from '../../styles/theme'

import { DefaultHeader } from '.'

describe('<DefaultHeader />', () => {
  it('should render the default header', () => {
    render(
      <ThemeProvider theme={theme}>
        <DefaultHeader />
      </ThemeProvider>
    )

    const element = screen.getByRole('banner')

    expect(element).toBeInTheDocument()
  })

  it('should navigation list in the default header', () => {
    render(
      <ThemeProvider theme={theme}>
        <DefaultHeader />
      </ThemeProvider>
    )

    const element = screen.getByRole('banner')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(/Home/i)
    expect(element).toHaveTextContent(/Social/i)
    expect(element).toHaveTextContent(/Profile/i)
  })
})

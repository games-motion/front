import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import { CardNotify } from '.'

import { theme } from '../../styles/theme'

describe('<CardNotify />', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardNotify title="Test notify" id="cacsa" />
      </ThemeProvider>
    )

    const element = screen.getByText(/Test notify/i)

    expect(element).toBeInTheDocument()
  })
})

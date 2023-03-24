// import React from 'react'
import { render, screen } from '@testing-library/react'
import { renderWithProviders } from './utils/test-utils'
import Main from '../components/Main'
import App from '../App'
import { it } from 'vitest'


test('fetches & receives a user after clicking the fetch user button', () => {
  it('something happens', () => {
    render(<Main />)
    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })
})

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from './utils/test-utils'
import Main from '../components/Main'


test('fetches & receives a user after clicking the fetch user button', async () => {
  renderWithProviders(<Main />)
  expect(screen.getByText(/Test/i)).toBeInTheDocument()
})
 
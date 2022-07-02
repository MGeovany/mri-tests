import { expect, test } from '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders title', () => {
  render(<App />)
  const titleElement = screen.getByText(/MRI Units - Tests 🧪/i)
  expect(titleElement).toBeInTheDocument()
})

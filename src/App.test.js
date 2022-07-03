/* eslint-disable space-before-function-paren */
import { expect, test, describe, userEvent } from '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { FormInput } from './components/form-input/FormInput'
import { MriUnits } from './components/mri-list/MriUnits'

describe('Renders UI innitial', () => {
  test('renders title', () => {
    render(<App />)
    const titleElement = screen.getByText(/MRI Units - Tests 🧪/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('renders textarea', () => {
    render(<FormInput />)
    const formElement = screen.getByPlaceholderText(/Insert MRI Units List/i)
    expect(formElement).toBeInTheDocument()
  })

  test('render button', () => {
    render(<FormInput />)
    const buttonElement = screen.getByText(/Next/i)
    expect(buttonElement).toBeInTheDocument()
  })
})

describe('Validate MRIs Link', () => {
  test('validate MRI Link', async () => {
    const user = userEvent.setup()
    render(<MriUnits />)
    await user.click(screen.getByRole('a'))
  })
  // describe
})

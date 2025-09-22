import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

describe('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/greet/i)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Nested', () => {
  it('renders with a name', () => {
    render(<Greet name="Vishwas" />)
    const textElement = screen.getByText('Greet Vishwas')
    expect(textElement).toBeInTheDocument()
  })
})

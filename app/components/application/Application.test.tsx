import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    // render the Application component
    // assert that all elements are present
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', { level: 2 })
    expect(sectionHeading).toBeInTheDocument()
    // QUERY BY TEXT
    const paragrapgElement = screen.getByText('All fields are mandatory')
    expect(paragrapgElement).toBeInTheDocument()
    // QUERY BY TITLE
    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()
    // QUERY BY TEST ID
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    // QUERY BY LABEL NAME
    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()
    // QUERY BY TAG
    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()
    // QUERY BY PLACEHOLDER
    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()
    // QUERY BY INPUT VALUE
    const nameElement4 = screen.getByDisplayValue('Vishwas')
    expect(nameElement4).toBeInTheDocument()
    // QUERY BY ALT TEXT
    const imgElement = screen.getByAltText('a person with a laptop')
    expect(imgElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()
  })
})

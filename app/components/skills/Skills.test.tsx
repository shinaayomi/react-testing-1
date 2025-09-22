import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

// // WHEN ELEMENT IS NOT PRESENT IN THE DOM, WE USE queryBy OR queryAllBy
// // WHEN ELEMENT IS PRESENT IN THE DOM, WE USE getBy OR getAllBy
// // WHEN ELEMENT IS EVENTUALLY PRESENT IN THE DOM, WE USE findBy OR findAllBy

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  // When Element is not present in the DOM, we use queryBy

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    // WE USE .NOT WHEN QUERY BY IS NOT PRESENT IN THE DOM
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // RETURNS PROMISE WHICH RESOLVES WHEN ELEMENT IS/ARE FOUND WHICH MATCHES THE QUERY
  // THE PROMISE IS REJECTED IF NO ELEMENT IS/ARE FOUND AFTER DEFAULT TIMEOUT OF 1000ms
  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 },
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})

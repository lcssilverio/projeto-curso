import {fireEvent, render, screen} from '@testing-library/react'
import {Button} from '.'

describe('Tests to Button component', () => {
  test('should render the button with the text', () => {
    render(<Button text="Load more"/>)
    expect.assertions(1)

    const button = screen.getByRole('button', {name: /load more/i })
    expect(button).toBeInTheDocument()
  })
  test('should call function on button click', () => {
    const handleClick = jest.fn()
    render(<Button text="Load more" onClick={handleClick}/>)
    const button = screen.getByRole('button', {name: /load more/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
  test('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true}/>)

    const button = screen.getByRole('button', {name: /load more/i })
    expect(button).toBeDisabled()
  })

  test('should be enable when enable is true', () => {
    render(<Button text="Load more" disabled={false}/>)

    const button = screen.getByRole('button', {name: /load more/i })
    expect(button).not.toBeDisabled()
  })

  test('should match  snapshot', () => {
    const handleClick = jest.fn()
    const { container } = render(<Button text="Load more" onClick={handleClick}/>)

    expect(container).toMatchSnapshot()
  })
})

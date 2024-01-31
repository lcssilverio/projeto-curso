import { render, screen } from "@testing-library/react"
import { PostCard } from '.'
import { mockPostCard } from "./mock"

describe('Tests to PostCard component', () => {
  test('should render the PostCard correctly', () => {
    render(<PostCard {...mockPostCard} />)
    expect(screen.getByRole('img', {name: 'Title'}))
      .toHaveAttribute('src', 'img/img.png')
    expect(screen.getByRole('heading', {name: 'Title 1'})).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  test('should match snapshot', () => {
    const {container} = render(<PostCard {...mockPostCard} />)
    expect(container.firstChild).toMatchSnapshot()
  })

})

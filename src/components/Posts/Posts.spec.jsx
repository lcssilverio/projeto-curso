import { Posts } from ".";
import { render, screen } from "@testing-library/react";

const mockPosts = {
  posts: [
    {
      id: 1,
      title: "Title 1",
      body: 'Body 1',
      covert: 'img/img1.png'
    },
    {
      id: 2,
      title: "Title 2",
      body: 'Body 2',
      covert: 'img/img2.png'
    },
    {
      id: 3,
      title: "Title 3",
      body: 'Body 3',
      covert: 'img/img3.png'
    },
    {
      id: 4,
      title: "Title 4",
      body: 'Body 4',
      covert: 'img/img4.png'
    }
  ]
}

describe("Tests to Posts component", () => {
  test("should render Posts components", () => {
    render(<Posts {...mockPosts}/>);

    expect(screen.getAllByRole('heading', {name:  /Title/i})).toHaveLength(4)
    expect(screen.getAllByRole('img', {name:  /Title/i})).toHaveLength(4)
    expect(screen.getAllByText(/body/i)).toHaveLength(4)
  });

  test("should not render Posts", () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', {name:  /Title/i})).not.toBeInTheDocument()
  });

  test("should match snapshot", () => {
    const {container} = render(<Posts {...mockPosts}/>);
    expect(container).toMatchSnapshot()
  });
});

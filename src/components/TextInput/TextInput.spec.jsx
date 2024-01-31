import { render, screen } from "@testing-library/react";
import { TextInput } from ".";
import userEvent from "@testing-library/user-event";


describe("Tests to TextInput component", () => {
  test("should have a value of searchValue", () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue={'testando'}/>);

    const input = screen.getByPlaceholderText(/type your search/i)
    expect(input.value).toBe('testando')
  });

  test("should call handleChange function on each key pressd", () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn}/>);

    const input = screen.getByPlaceholderText(/type your search/i)

    const value = 'o valor'

    userEvent.type(input, value)

    expect(input.value).toBe(value)
    expect(fn).toHaveBeenCalledTimes(value.length)
  });

  test("should match snapshot", () => {
    const fn = jest.fn()
    const {container} = render(<TextInput handleChange={fn} searchValue={'testando'}/>);
    expect(container).toMatchSnapshot()
  });
});

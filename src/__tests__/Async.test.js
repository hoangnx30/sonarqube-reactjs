import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Async from "../components/Async";

describe("Async Components", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValue({
      json: async () => {
        return [{ id: 1, title: "post 1" }];
      },
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});

describe("Async Components Enzyme", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Async />);
  
    expect(component).toMatchSnapshot();
  });
})
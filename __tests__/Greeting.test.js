import Greeting from "../src/components/Greeting";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { unmountComponentAtNode } from "react-dom";
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Greeting components", () => {
  test("renders Hello Worlds as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders ahihi if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Ahihi", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("not renders good to see you if button was clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});

describe("Greeting Components Enzyme", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Greeting debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("Test following react", () => {
  it("test following react", () => {
    act(() => {
      render(<Greeting />, container);
    });
    
    expect(container.textContent).toBe("");
  });
});

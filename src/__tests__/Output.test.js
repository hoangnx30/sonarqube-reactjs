import { act } from "@testing-library/react";
import { unmountComponentAtNode, render } from "react-dom";
import Output from "../components/Output";
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

it("test output components", () => {
  act(() => {
    render(<Output content="hihi" />, container);
  });
  expect(container.querySelector("p").textContent).toBe("hihi");
});

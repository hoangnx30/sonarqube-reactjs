import { render, screen } from "@testing-library/react";
import Async from "./Async";

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

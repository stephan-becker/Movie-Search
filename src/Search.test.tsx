import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./Search";

test("renders header", () => {
  const searchSubmitCallback = jest.fn((_) => {});

  render(<Search searchText="default" onSearchSubmit={searchSubmitCallback} />);

  // TODO: Update the search input to "Shrek" and click the submit button

  expect(searchSubmitCallback.mock.calls.length).toBe(1);
  expect(searchSubmitCallback.mock.calls[0][0]).toBe("Shrek");
});

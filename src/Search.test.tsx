import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "./Search";

test("renders header", () => {
  const submitCallback = jest.fn((_) => {});

  render(<Search searchText="default" onSubmit={submitCallback} />);

  // TODO: Update the search input to "Shrek" and click the submit button

  expect(submitCallback.mock.calls.length).toBe(1);
  expect(submitCallback.mock.calls[0][0]).toBe("Shrek");
});

import { render, screen } from "@testing-library/react";
import Welcome from "./home";

test("React Router", () => {
  render(<Welcome />);
  const textElement = screen.getByText(/React Router Docs/i);
  expect(textElement).toBeInTheDocument();
});

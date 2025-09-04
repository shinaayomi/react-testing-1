import { render, screen } from "@testing-library/react";
import Welcome from "./home";

// test(name, fn, timeout)
// the first argument is the name of the test used to identify the test
// The second argument is a function that contains the expextations to test / code for the test
// The third argument is timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5000ms(5 seconds).

test("React Router", () => {
  render(<Welcome />);
  const textElement = screen.getByText(/React Router Docs/i);
  expect(textElement).toBeInTheDocument();
});

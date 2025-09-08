import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// test(name, fn, timeout)
// the first argument is the name of the test used to identify the test
// The second argument is a function that contains the expextations to test / code for the test
// The third argument is timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5000ms(5 seconds).

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/greet/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders with a name", () => {
      render(<Greet name="Vishwas" />);
      const textElement = screen.getByText("Greet Vishwas");
      expect(textElement).toBeInTheDocument();
    });
  });
});

// TO FILTER
// test.only("Greet renders with a name", () => {
//   render(<Greet name="Vishwas" />);
//   const textElement = screen.getByText("Greet Vishwas");
//   expect(textElement).toBeInTheDocument();
// });

// test.skip("Greet renders with a name", () => {
//   render(<Greet name="Vishwas" />);
//   const textElement = screen.getByText("Greet Vishwas");
//   expect(textElement).toBeInTheDocument();
// });

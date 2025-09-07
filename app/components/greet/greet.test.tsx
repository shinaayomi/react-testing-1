import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

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

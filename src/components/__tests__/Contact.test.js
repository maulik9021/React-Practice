import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
   test("Should load contact us component", () => {
      render(<ContactUs/>);
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
   });

   test("Should load button inside my contact us component", () => {
      render(<ContactUs/>);
      const button = screen.getByPlaceholderText("name");
      expect(button).toBeInTheDocument();
   });
});
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";
import { act } from "react";

test("should contain the text content of Contact", () => {
    render(<Contact />);

    const heading = screen.getByText(/Contact/);

    expect(heading).toBeInTheDocument();
});

test("should contain the heading element with textContent of Contact", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /contact/i });
    expect(heading).toBeInTheDocument();
});

test("should contain the heading element with textContent of Naveen", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /naveen/i });
    expect(heading).toBeInTheDocument();
});

test("should contain the heading element with textContent of Naveen", () => {
    // act(async () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /naveen/i });
    expect(heading).toBeInTheDocument();
    // });
});

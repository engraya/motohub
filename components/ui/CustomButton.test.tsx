import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./CustomButton";

describe("CustomButton", () => {
  it("renders the title text", () => {
    render(<Button title="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls handleClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button title="Click" handleClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when isDisabled is true", () => {
    render(<Button title="Disabled" isDisabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("does not fire click when disabled", () => {
    const onClick = vi.fn();
    render(<Button title="Disabled" isDisabled handleClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies containerStyles class", () => {
    render(<Button title="Styled" containerStyles="bg-red-500" />);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-red-500");
  });
});

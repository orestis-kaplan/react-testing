import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import SummaryForm from "../SummaryForm";

test("checkbox and button initial states", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: "Confirm" });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("clicking on terms should enable the button", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: "Confirm" });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

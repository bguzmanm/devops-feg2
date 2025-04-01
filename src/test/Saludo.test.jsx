import React from "react";

import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Saludo from "../components/Saludo";
import "@testing-library/jest-dom";

test("muestra el mensaje de saludo con el nombre proporcionado", () => {
  render(<Saludo nombre="Javier" />);

  expect(
    screen.getByText("¡Hola, Javier!", { normalizeWhitespace: true })
  ).toBeInTheDocument();
});

test("otro test que será interesante de aplicar", () => {
  expect(true).toBeTruthy();
});

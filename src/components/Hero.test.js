import React from "react";

import Hero from "./Hero";

import { render } from "@testing-library/react";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Giovana Manuquian</p>
    </Hero>
  );

  expect(getByText("Giovana Manuquian")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  
  const {getByTestId} = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
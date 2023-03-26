import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import Books from "../stories/assets/books.jpg";

import Heading from "./Heading";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={Books}>
    <h1>{text("Title", "Find a perfect book for your imagination")}</h1>
    <p>{text("Title", "Everyone's favorite book site")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={Books}>
    <Heading>
      <h1>
        Find a <strong>perfect</strong>
        <br />
        book for your imagination
      </h1>
    </Heading>
    <ul>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Amet mollitia velit soluta maxime qui fugiat asperiores!</li>
      <li>Sunt sed pariatur suscipit maiores, blanditiis commodi quis.</li>
    </ul>
    <button>Check out now</button>
  </Hero>
);

module.exports = {
  stories: [
    "../src/stories/*.stories.(js|mdx)",
    "../src/components/*.stories.(js|mdx)",
    "../src/styles/*.stories.(js|mdx)",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

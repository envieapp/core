module.exports = {
  stories: ["../src/**/*.(stories|story).mdx", "../src/**/*.(stories|story).@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-essentials'
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
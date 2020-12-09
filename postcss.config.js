module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-extend": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

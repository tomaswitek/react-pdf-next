// next.config.js
module.exports = {
  target: "serverless",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "unicode-properties": "unicode-properties/unicode-properties.cjs.js",
    };
    config.module.rules.push({
      test: /unicode-properties[\/\\]unicode-properties/,
      loader: "transform-loader?brfs",
    });
    return config;
  },
};

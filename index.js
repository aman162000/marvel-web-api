exports.Auth = (config) => {
  if (!config) {
    throw new Error("Provide API credentials");
  }
  if (!config.apiKey) {
    throw new Error("Provide valid API key");
  }
  if (!config.secretKey) {
    throw new Error("Provide valid Private key");
  }

  return require("./lib/index")(config);
};

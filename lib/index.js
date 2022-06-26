const Request = require("./util/Request");

module.exports = function (config) {
  const req = new Request(config.apiKey, config.secretKey);

  var inter = {};

  inter.character = require("./character")(req);
  inter.comic = require("./comic")(req);
  inter.creator = require("./creators")(req);
  inter.series = require("./series")(req);
  inter.event = require("./events")(req);
  return inter;
};

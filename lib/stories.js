const stories = (req) => {
  let inter = {};

  inter.findAll = (limit = 20, offset = 0, order = "id") => {
    return req.send(["stories"], {
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.find = (id) => {
    return req.send(["stories", id]);
  };

  inter.characters = (id) => {
    return req.send(["stories", id, "characters"]);
  };

  inter.comics = (id) => {
    return req.send(["stories", id, "comics"]);
  };

  inter.creators = (id) => {
    return req.send(["stories", id, "creators"]);
  };

  inter.events = (id) => {
    return req.send(["stories", id, "events"]);
  };

  inter.series = (id) => {
    return req.send(["stories", id, "series"]);
  };

  return inter;
};

module.exports = stories;

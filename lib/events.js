const events = (req) => {
  let inter = {};

  inter.findAll = (limit = 20, offset = 0, order = "name") => {
    return req.send(["events"], {
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByTitle = (name, limit = 20, offset = 0, order = "name") => {
    return req.send(["events"], {
      name: name,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.find = (id) => {
    return req.send(["events", id]);
  };

  inter.comics = (id) => {
    return req.send(["events", id, "comics"]);
  };

  inter.characters = (id) => {
    return req.send(["events", id, "characters"]);
  };

  inter.creators = (id) => {
    return req.send(["events", id, "creators"]);
  };

  inter.series = (id) => {
    return req.send(["events", id, "series"]);
  };

  inter.stories = (id) => {
    return req.send(["events", id, "stories"]);
  };

  return inter;
};

module.exports = events;

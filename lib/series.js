const series = (req) => {
  let inter = {};

  inter.findAll = (limit = 20, offset = 0, order = "title") => {
    return req.send(["series"], {
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByTitle = (title, limit = 20, offset = 0, order = "title") => {
    return req.send(["series"], {
      title: title,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.find = (id) => {
    return req.send(["series", id]);
  };

  inter.comics = (id) => {
    return req.send(["series", id, "comics"]);
  };

  inter.events = (id) => {
    return req.send(["series", id, "events"]);
  };

  inter.characters = (id) => {
    return req.send(["series", id, "characters"]);
  };

  inter.creators = (id) => {
    return req.send(["series", id, "creators"]);
  };

  inter.stories = (id) => {
    return req.send(["series", id, "stories"]);
  };

  return inter;
};

module.exports = series;

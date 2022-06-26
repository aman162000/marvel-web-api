const comic = (req) => {
  let inter = {};

  inter.findAll = (limit = 20, offset = 0, order = "title") => {
    return req.send(["comics"], {
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByFormat = (format, limit = 20, offset = 0, order = "title") => {
    return req.send(["comics"], {
      format: format,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByTitle = (title, limit = 20, offset = 0, order = "title") => {
    return req.send(["comics"], {
      title: title,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByTitleStartsWith = (
    title,
    limit = 20,
    offset = 0,
    order = "title"
  ) => {
    return req.send(["comics"], {
      titleStartsWith: title,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.find = (id) => {
    return req.send(["comics", id]);
  };

  inter.characters = (id) => {
    return req.send(["comics", id, "characters"]);
  };

  inter.creators = (id) => {
    return req.send(["comics", id, "creators"]);
  };

  inter.events = (id) => {
    return req.send(["comics", id, "events"]);
  };

  inter.stories = (id) => {
    return req.send(["comics", id, "stories"]);
  };

  return inter;
};
module.exports = comic;

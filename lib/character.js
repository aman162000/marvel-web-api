const character = (req) => {
  let inter = {};

  inter.findAll = (limit = 20, offset = 0, order = "name") => {
    return req.send(["characters"], {
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByName = (_name, limit = 20, offset = 0, order = "name") => {
    return req.send(["characters"], {
      name: _name,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByNameStartsWith = (
    _name,
    limit = 20,
    offset = 0,
    order = "name"
  ) => {
    return req.send(["characters"], {
      nameStartsWith: _name,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByComics = (comic, limit = 20, offset = 0, order = "name") => {
    return req.send(["characters"], {
      comics: comic,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findBySeries = (series, limit = 20, offset = 0, order = "name") => {
    return req.send(["characters"], {
      series: series,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByEvents = (events, limit = 20, offset = 0, order = "name") => {
    return req.send(["characters"], {
      events: events,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.findByStories = (stories, limit = 20, offset = 0, order = "name") => {
    return req.send(["characters"], {
      stories: stories,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.find = (id) => {
    return req.send(["characters", id]);
  };

  inter.comics = (id) => {
    return req.send(["characters", id, "comics"]);
  };

  inter.events = (id) => {
    return req.send(["characters", id, "events"]);
  };

  inter.series = (id) => {
    return req.send(["characters", id, "series"]);
  };
  inter.stories = (id) => {
    return req.send(["characters", id, "stories"]);
  };

  return inter;
};

module.exports = character;

const creators = (req) => {
  let inter = {};

  inter.findAll = (
    fisrt,
    middle,
    last,
    limit = 20,
    offset = 0,
    order = "name"
  ) => {
    return req.send(["creators"], {
      firstName: fisrt,
      middleName: middle,
      lastName: last,
      limit: limit,
      offset: offset,
      orderBy: order,
    });
  };

  inter.find = (id) => {
    return req.send(["creators", id]);
  };

  inter.comics = (id) => {
    return req.send(["creators", id, "comics"]);
  };
  inter.series = (id) => {
    return req.send(["creators", id, "series"]);
  };
  inter.events = (id) => {
    return req.send(["creators", id, "events"]);
  };

  inter.stories = (id) => {
    return req.send(["creators", id, "stories"]);
  };

  return inter;
};

module.exports = creators;

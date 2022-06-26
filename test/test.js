const Request = require("../lib/util/Request");
const Setting = require("../lib/util/Setting");
const req = new Request(
  "44442e7143badff45a00c0eee7ca3299",
  "454e3d14a82afdb45e70f27757a4744da1436097"
);

const assert = require("chai").assert;

const character = require("../lib/character")(req);
const comic = require("../lib/comic")(req);
const stories = require("../lib/stories")(req);
const events = require("../lib/events")(req);
const series = require("../lib/series")(req);

beforeEach(function (done) {
  this.timeout(500000);

  setTimeout(function () {
    done();
  }, 3000);
});

describe("Marvel API test", function () {
  this.timeout(500000);
  beforeEach((done) => {
    done();
  });

  describe("#Characters", () => {
    it("GET/characters", async () => {
      const response = await character.findAll();
      assert.equal(
        response.data.results[0].id,
        1011334,
        "wrong id, should be 1011334"
      );
      assert.equal(
        response.data.results[0].name,
        "3-D Man",
        "wrong name, should be 3-D Man"
      );
    });

    it("GET/a single character resource", async () => {
      const response = await character.find(1011334);
      assert.equal(
        response.data.results[0].id,
        1011334,
        "wrong id, should be 1011334"
      );
      assert.equal(
        response.data.results[0].name,
        "3-D Man",
        "wrong name, should be 3-D Man"
      );
    });

    it("GET/comics containing a specific character", async () => {
      const response = await character.comics(1011334);

      assert.equal(
        response.data.results[0].id,
        22506,
        "wrong id, should be 22506"
      );
    });

    it("GET/events in which a specific character appears", async () => {
      const response = await character.events(1011334);

      assert.equal(response.data.results[0].id, 269, "wrong id, should be 269");
      assert.equal(
        response.data.results[0].title,
        "Secret Invasion",
        "wrong title, should be Secret Invasion"
      );
    });

    it("GET/comic series in which a specific character appears", async () => {
      const response = await character.series(1011334);

      assert.equal(
        response.data.results[0].id,
        1945,
        "wrong id, should be 1945"
      );
      assert.equal(
        response.data.results[0].title,
        "Avengers: The Initiative (2007 - 2010)",
        "wrong title, should be Avengers: The Initiative (2007 - 2010)"
      );
    });

    it("GET/comic stories featuring a specific character", async () => {
      const response = await character.stories(1011334);

      assert.equal(
        response.data.results[0].id,
        19947,
        "wrong id, should be 19947"
      );
      assert.equal(
        response.data.results[0].title,
        "Cover #19947",
        "wrong title, should be Cover #19947"
      );
    });
  });

  describe("#Comics", () => {
    it("GET/lists of comics", async () => {
      const response = await comic.findAll();
      assert.equal(
        response.data.results[0].id,
        91992,
        "wrong id, should be 91992"
      );
      assert.equal(
        response.data.results[0].title,
        " Fantastic Four by Dan Slott Vol. 1 (Hardcover)",
        "wrong title, should be  Fantastic Four by Dan Slott Vol. 1 (Hardcover)"
      );
    });

    it("GET/filter by the issue format", async () => {
      const response = await comic.findByFormat("comic");
      assert.equal(
        response.data.results[0].id,
        49010,
        "wrong id, should be 49010"
      );
      assert.equal(
        response.data.results[0].title,
        "100th Anniversary Special (2014) #1",
        "wrong title, should be 100th Anniversary Special (2014) #1"
      );
    });

    it("GET/a single comic resource", async () => {
      const response = await comic.find(49010);
      assert.equal(
        response.data.results[0].digitalId,
        34127,
        "wrong id, should be 34127"
      );
    });

    it("GET/lists of characters which appear in a specific comic", async () => {
      const response = await comic.characters(22506);

      assert.equal(
        response.data.results[0].id,
        1011334,
        "wrong id, should be 1011334"
      );
    });

    it("GET/lists of comic creators whose work appears in a specific comic", async () => {
      const response = await comic.creators(22506);
      assert.equal(
        response.data.results[0].id,
        2133,
        "wrong id, should be 2133"
      );
      assert.equal(
        response.data.results[0].firstName,
        "Tom",
        "wrong name, should be Tom"
      );
    });
    it("GET/ lists of events in which a specific comic appears", async () => {
      const response = await comic.events(22506);
      assert.equal(response.data.results[0].id, 269, "wrong id, should be 269");
      assert.equal(
        response.data.results[0].title,
        "Secret Invasion",
        "wrong name, should be Secret Invasion"
      );
    });
    it("GET/lists of comic stories in a specific comic issue", async () => {
      const response = await comic.stories(22506);
      assert.equal(
        response.data.results[0].id,
        49888,
        "wrong id, should be 49888"
      );
      assert.equal(
        response.data.results[0].title,
        "AVENGERS: THE INITIATIVE (2007) #19",
        "wrong name, should be AVENGERS: THE INITIATIVE (2007) #19"
      );
    });
  });

  describe("#Stories", () => {
    it("GET/lists of comic stories", async () => {
      const response = await stories.findAll();
      assert.equal(response.data.results[0].id, 7, "wrong id, should be 7");
    });

    it("GET/a single comic story resource", async () => {
      const response = await stories.find(7);
      assert.equal(response.data.results[0].id, 7, "wrong id, should be 7");
    });

    it("GET/lists of comics in which a specific story appears", async () => {
      const response = await stories.comics(7);
      assert.equal(response.data.results[0].id, 941, "wrong id, should be 941");
    });

    it("GET/lists of comic creators whose work appears in a specific story", async () => {
      const response = await stories.creators(100);
      assert.equal(response.data.results[0].id, 110, "wrong id, should be 110");
      assert.equal(
        response.data.results[0].firstName,
        "Christopher",
        "wrong name, should be Christopher"
      );
    });

    it("GET/lists of events in which a specific story appears", async () => {
      const response = await stories.events(100);
      assert.exists(response.data.results);
    });

    it("GET/lists of comic series in which the specified story takes place", async () => {
      const response = await stories.series(7);
      assert.equal(response.data.results[0].id, 6, "wrong id, should be 6");
    });
  });

  describe("#Events", () => {
    it("GET/lists of events", async () => {
      const response = await events.findAll();
      assert.equal(response.data.results[0].id, 116, "wrong id, should be 116");
    });

    it("GET/events which match the specified name", async () => {
      const response = await events.findByTitle("Acts of Vengeance!");
      assert.equal(response.data.results[0].id, 116, "wrong id, should be 116");
      assert.equal(
        response.data.results[0].title,
        "Acts of Vengeance!",
        "wrong title, should be Acts of Vengeance!"
      );
    });

    it("GET/a single event resource", async () => {
      const response = await events.find(116);
      assert.equal(response.data.results[0].id, 116, "wrong id, should be 116");
      assert.equal(
        response.data.results[0].title,
        "Acts of Vengeance!",
        "wrong title, should be Acts of Vengeance!"
      );
    });
    it("GET/a single event resource", async () => {
      const response = await events.characters(116);
      assert.equal(
        response.data.results[0].id,
        1009435,
        "wrong id, should be 1009435"
      );
      assert.equal(
        response.data.results[0].title,
        "Alicia Masters",
        "wrong title, should be Alicia Masters"
      );
    });
    it("GET/lists of comics which take place during a specific event", async () => {
      const response = await events.comics(116);
      assert.equal(
        response.data.results[0].id,
        17695,
        "wrong id, should be 17695"
      );
      assert.equal(
        response.data.results[0].title,
        "AVENGERS WEST COAST: DARKER THAN SCARLET TPB (Trade Paperback)",
        "wrong title, should be AVENGERS WEST COAST: DARKER THAN SCARLET TPB (Trade Paperback)"
      );
    });
    it("GET/lists of comic creators whose work appears in a specific event", async () => {
      const response = await events.creators(116);
      assert.equal(
        response.data.results[0].id,
        2707,
        "wrong id, should be 2707"
      );
      assert.equal(
        response.data.results[0].firstName,
        "Jeff",
        "wrong title, should be Jeff"
      );
    });
    it("GET/lists of comic series in which a specific event takes place", async () => {
      const response = await events.series(116);
      assert.equal(
        response.data.results[0].id,
        2116,
        "wrong id, should be 2116"
      );
      assert.equal(
        response.data.results[0].title,
        "Alpha Flight (1983 - 1994)",
        "wrong title, should be Alpha Flight (1983 - 1994)"
      );
    });
    it("GET/lists of comic stories from a specific event", async () => {
      const response = await events.series(116);
      assert.equal(
        response.data.results[0].id,
        2116,
        "wrong id, should be 2116"
      );
      assert.equal(
        response.data.results[0].title,
        "Alpha Flight (1983 - 1994)",
        "wrong title, should be Alpha Flight (1983 - 1994)"
      );
    });
  });

  describe("#Series", () => {
    it("GET/lists of comic series", async () => {
      const response = await series.findAll();
      assert.equal(
        response.data.results[0].id,
        31445,
        "wrong id, should be 31445"
      );
    });

    it("GET/a single comic series resource", async () => {
      const response = await series.find(31445);
      assert.equal(
        response.data.results[0].id,
        31445,
        "wrong id, should be 31445"
      );
      assert.equal(
        response.data.results[0].title,
        " Fantastic Four by Dan Slott Vol. 1 (2021)",
        "wrong title, should be  Fantastic Four by Dan Slott Vol. 1 (2021)"
      );
    });

    it("GET/lists of characters which appear in specific series", async () => {
      const response = await series.characters(31445);
      assert.exists(response.data.results);
    });
    it("GET/lists of comics which are published as part of a specific series", async () => {
      const response = await series.comics(31445);
      assert.equal(
        response.data.results[0].id,
        91992,
        "wrong id, should be 91992"
      );
    });
    it("GET/lists of comic creators whose work appears in a specific series", async () => {
      const response = await series.creators(31445);
      assert.equal(
        response.data.results[0].id,
        4430,
        "wrong id, should be 4430"
      );
    });
    it("GET/lists of events which occur in a specific series", async () => {
      const response = await series.creators(31445);
      assert.exists(response.data.results);
    });
    it("GET/lists of comic stories from a specific series", async () => {
      const response = await series.stories(31445);
      assert.equal(
        response.data.results[0].id,
        205070,
        "wrong id, should be 205070"
      );
    });
  });
});

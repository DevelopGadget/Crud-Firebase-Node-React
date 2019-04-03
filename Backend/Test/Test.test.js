import Chai from "chai";
import Http from "chai-http";
import Index from "../Index";
Chai.use(Http);
var should = Chai.should();
var Id = "";

describe("Mutation /Post", () => {
  it("Post Equipos Test", done => {
    Chai.request(Index)
      .post("/Post")
      .send({
        Nombre: "Nombre",
        Estadio: "Estadio",
        UrlEscudo:
          "https://www.concierto.cl/wp-content/uploads/2019/04/Avengers-Endgame.jpg",
        UrlEstadio:
          "https://www.concierto.cl/wp-content/uploads/2019/04/Avengers-Endgame.jpg"
      })
      .end((err, res) => {
        if (err) done();
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.Message.forEach(element => {
          if (
            element.UrlEscudo ==
              "https://www.concierto.cl/wp-content/uploads/2019/04/Avengers-Endgame.jpg" &&
            element.UrlEstadio ==
              "https://www.concierto.cl/wp-content/uploads/2019/04/Avengers-Endgame.jpg"
          ) {
            Id = element.Id;
          }
        });
        done();
      });
  });
});

describe("Query /Get", () => {
  it("GetAll Equipos Test", done => {
    Chai.request(Index)
      .get("/Get")
      .end((err, res) => {
        if (err) done();
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("Put /Put", () => {
  it("Put Equipos Test", done => {
    Chai.request(Index)
      .put("/Put")
      .set({ id: Id })
      .send({
        Nombre: "Nombre Cambiado",
        Estadio: "Estadio Cambiado",
        UrlEscudo:
          "https://www.concierto.cl/wp-content/uploads/2019/04/Avengers-Endgame.jpg",
        UrlEstadio:
          "https://www.concierto.cl/wp-content/uploads/2019/04/Avengers-Endgame.jpg"
      })
      .end((err, res) => {
        if (err) done();
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("Delete /Delete", () => {
  it("Delete Equipos Test", done => {
    Chai.request(Index)
      .delete("/Delete")
      .set({ id: Id })
      .end((err, res) => {
        if (err) done();
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

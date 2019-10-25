/* eslint-env mocha */
const supertest = require("supertest")

const services = {
  endpoint: "http://172.18.0.5:8080"
}

describe("cinemas-service", () => {
  const api = supertest(services.endpoint)
  it("returns schedules for a movie", done => {
    api.get("/cinemas/588ababf2d029a6d15d0b5bf/1").expect(200, done)
  })
})

describe("movies-service", () => {
  const api = supertest(services.endpoint)
  it("returns a 200 for get movies", done => {
    api.get("/movies").expect(200, done)
  })
})

/* eslint-env mocha */
const server = require("./server")
const { asValue, createContainer } = require("awilix")
const { routes } = require("../routes/router")

describe("Server", () => {
  it("should require a port to start", () => {
    const container = createContainer()
    container.register({
      serverSettings: asValue({}),
      routes: asValue(routes)
    })
    return server
      .start(container)
      .should.be.rejectedWith(
        "The server must be started with an available port"
      )
  })
})

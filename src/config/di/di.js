const { createContainer, asValue } = require("awilix")

function initDI({ serverSettings }, mediator) {
  mediator.once("init", () => {
    const container = createContainer()

    container.register({
      serverSettings: asValue(serverSettings)
    })

    mediator.emit("di.ready", container)
  })
}

module.exports.initDI = initDI

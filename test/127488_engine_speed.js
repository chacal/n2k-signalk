var NV = require('./util/nv_input_test')
var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))
chai.use(require('signalk-schema').chaiModule)

describe('127488 engine speed Port', NV.test(function (nv) {
  it('complete engine speed sentence converts', function () {
    var tree = require('../n2kMapper.js').toNested(
      JSON.parse(
        `{"timestamp":"2015-01-15-16:16:56.749Z","prio":"2","src":"17","dst":"255","pgn":"127488","description":"Engine Parameters, Rapid Update","fields":{"Engine Instance":${NV.F(nv, "Single Engine or Dual Engine Port", 0)},"Engine Speed":"3190"}}`
      )
    )
    tree.should.have.nested.property('propulsion.port.revolutions')
    tree.should.have.nested.property(
      'propulsion.port.revolutions.value',
      53.166666666666664
    )
    tree.should.be.validSignalKVesselIgnoringIdentity
  })
}))

describe('127488 engine speed Starboard', NV.test(function (nv) {
  it('complete engine speed sentence converts', function () {
    var tree = require('../n2kMapper.js').toNested(
      JSON.parse(
        `{"timestamp":"2015-01-15-16:16:56.749Z","prio":"2","src":"17","dst":"255","pgn":"127488","description":"Engine Parameters, Rapid Update","fields":{"Engine Instance":${NV.F(nv, "Dual Engine Starboard", 1)},"Engine Speed":"3190"}}`
      )
    )
    tree.should.have.nested.property('propulsion.starboard.revolutions')
    tree.should.have.nested.property(
      'propulsion.starboard.revolutions.value',
      53.166666666666664
    )
    tree.should.be.validSignalKVesselIgnoringIdentity
  })
}))

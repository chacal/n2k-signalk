module.exports = {
  test: function nvModeTest(tests) {
    return function() {
      [false, true].forEach(function(nvMode) {
        describe(`In ${nvMode ? "'-nv'" : 'normal'} input mode`, function() {
          tests(nvMode)
        })
      })
    }
  },
  F: function nvField(nv, name, value) {
    return nv ? `{"name":"${name}","value":${value}}` : `"${name}"`
  }
}

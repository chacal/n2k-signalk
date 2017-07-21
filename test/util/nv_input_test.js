module.exports = function nvModeTest(tests) {
  return function() {
    [false, true].forEach(function(nvMode) {
      describe(`In ${nvMode ? "'-nv'" : 'normal'} input mode`, function() {
        tests(nvMode)
      })
    })
  }
}

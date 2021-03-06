module.exports = [
  {
    value: function (n2k) {
      return n2k.fields['State of Charge'] / 100
    },
    filter: function (n2k) {
      return typeof n2k.fields['State of Charge'] !== 'undefined'
    },
    node: function (n2k) {
      return (
        'electrical.batteries.' +
        n2k.fields['DC Instance'] +
        '.capacity.stateOfCharge'
      )
    }
  },
  {
    source: 'State of Health',
    node: function (n2k) {
      return (
        'electrical.batteries.' +
        n2k.fields['DC Instance'] +
        '.capacity.stateOfHealth'
      )
    }
  },
  {
    filter: function (n2k) {
      return typeof n2k.fields['Time Remaining'] !== 'undefined'
    },
    value: function(n2k, state) {                                               
      var val = n2k.fields['Time Remaining']
      return val * 60; //convert to seconds
    },                                                                          
    node: function (n2k) {
      return (
        'electrical.batteries.' +
        n2k.fields['DC Instance'] +
        '.capacity.timeRemaining'
      )
    }
  } /*, {
    source: 'Ripple Voltage',
    node: function(n2k) {
      return 'electrical.batteries.' + n2k.fields['DC Instance'] + '.voltage.ripple'
    }
  } */
]

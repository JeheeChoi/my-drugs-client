const config = require('../config')
const store = require('../store')

const manageDrugs = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  manageDrugs
}

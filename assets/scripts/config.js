'use strict'

let apiUrl
const apiUrls = {
  // production: 'https://salty-woodland-25840.herokuapp.com',
  production: 'http://localhost:7165',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

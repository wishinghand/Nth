module.exports = function getWords (word) {
  this.$.get('wordlists/' + word, function (data) {
    console.log('data')
    return data
  })
}

module.exports = function(source) {
  this.cacheable();

  var query = this.query.substring(1) + "\n"

  source = query + source

  return source;
};

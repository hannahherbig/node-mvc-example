module.exports = function(req, res){
  res.render('hello', { title: "Greeting", who: req.params.who || "World" });
};

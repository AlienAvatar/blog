module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts') //重定向
  });


  app.use('/signup', require('./signup'))
  app.use('/signin', require('./signin'))
  app.use('/signout', require('./signout.js'))
  app.use('/posts', require('./posts'))
  app.use('/comments', require('./comments'))
  app.use('/setting',require('./setting'))

  app.use(function(req,res){
      if(!res.headersSent){
        res.status(404).render('404')
      }
  });
};
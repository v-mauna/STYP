function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    return next()
  } else {
    res.redirect('/')
  }
}

function isSelfOrAdmin(req, res, next) {
  if (req.params.id === req.user.id || req.user.isAdmin) {
    return next()
  } else {
    res.redirect('/')
  }
}

module.exports = {isAdmin, isSelfOrAdmin}

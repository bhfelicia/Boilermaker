const router = require("express").Router()

router.use('/users', require('./users'))

router.use('/puppies', require('./puppies'))

router.use('/kittens', require('./kittens'))

router.use((req, res, next) => {
  const err = new Error('The page you are looking for does not exist')
  err.status = 404
  next(err)
})

module.exports = router

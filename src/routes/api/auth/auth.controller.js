const validation = require('../middleware/validation.js')

const login = async (req, res, next) => {
  try {
    await validation.login.validateAsync(req.body)
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message })
  }

  try {
    const { login, password } = req.body

    const isValidLoginAndPassword =
      (login === process.env.LOGIN_ADM &&
        password === process.env.PASSWORD_ADM) ||
      (login === process.env.LOGIN_MAX && password === process.env.PASSWORD_MAX)

    if (isValidLoginAndPassword)
      return res.status(200).json({ status: 200, data: { auth: true } })

    res.status(403).json({ status: 403, message: 'Forbidden' })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  login,
}

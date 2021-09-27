const { JsonWebTokenError } = require('jsonwebtoken')
const passport = require('passport')

const { User } = require('../db/__mocks__/data')
const guard = require('../routes/api/middleware/guard')

describe('Unit test: middleware/guard', () => {
  const req = {
    user: User,
  }
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn((response) => response),
  }
  const next = jest.fn()
  test('Run function with guard', () => {})
})

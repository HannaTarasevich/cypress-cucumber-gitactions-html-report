import crypto from 'crypto'

const generateRandomString = (length) => crypto.randomBytes(length).toString('hex')

const Users = {
  standard_user: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  locked_out_user: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  problem_user: {
    username: 'problem_user',
    password: 'secret_sauce'
  },
  performance_glitch_user: {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  },
  standard_user_with_wrong_password: {
    username: this.standard_user.username,
    password: generateRandomString(10)
  },
  non_existing_user: {
    username: generateRandomString(10),
    password: generateRandomString(10)
  }
}

export const users = Users

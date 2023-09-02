import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor'
import { users } from '@data/Users'

defineParameterType({
  regexp: /[^"]*/,
  name: 'user',
  transformer: (user) => {
    return users[user]
  }
})

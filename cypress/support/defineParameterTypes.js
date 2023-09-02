import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor'
import { users } from '@data/Users'
import { urls } from '@data/Urls'

defineParameterType({
  regexp: /[^"]*/,
  name: 'user',
  transformer: (user) => {
    return users[user]
  }
})

defineParameterType({
  regexp: /[^"]*/,
  name: 'path',
  transformer: (path) => {
    return urls[path]
  }
})

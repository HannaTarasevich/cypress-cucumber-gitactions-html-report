import { defineParameterType } from '@badeball/cypress-cucumber-preprocessor'
import { users } from '@data/Users'
import { urls } from '@data/Urls'

/**
 * Used for reading users from Users.js
 */
defineParameterType({
  regexp: /[^"]*/,
  name: 'user',
  transformer: (user) => {
    return users[user]
  }
})

/**
 * Used for reading users from Urls.js
 *
 * @return {string}
 */
defineParameterType({
  regexp: /[^"]*/,
  name: 'path',
  transformer: (path) => {
    return urls[path]
  }
})

/**
 * Used for text values.
 * @return {string}
 */
defineParameterType({
  regexp: /[^"]*/,
  name: 'text',
  transformer: (string) => {
    return string
  }
})

/**
 * Used for element conditions. One of the following: displayed, not displayed, not existing
 *
 * @return {string} element condition
 */
defineParameterType({
  regexp: /[^"]*/,
  name: 'elementCondition',
  useForSnippets: false,
  transformer: (elementCondition) => {
    const supportedElementConditions = ['displayed', 'not displayed', 'not existing']
    if (!supportedElementConditions.includes(elementCondition)) {
      throw new Error(`Element Condition: '${elementCondition}' is not supported. Only the following element conditions are supported: ${supportedElementConditions.join(', ')}`)
    }

    return elementCondition
  }
})

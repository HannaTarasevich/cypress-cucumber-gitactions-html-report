const Helpers = {
  /**
   * Returns random string with the specified length from the set of characters.
   *
   * @param length - string length
   * @returns {string} string
   */
  getRandomString: function (length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  },

  /**
   * Sorting array alphabetically or numerically in ascending or descending order case insensitive by default
   *
   * @param array - that need to be sorted
   * @param format - alphabetically or numerically
   * @param order - ascending or descending
   * @param {Boolean} caseSensitive
   * @returns {array} - sorted array
   */
  arraySorting: function (array, format, order, caseSensitive = false) {
    if (format === 'alphabetically') {
      array.sort(function (firstValue, secondValue) {
        if (!caseSensitive) {
          firstValue = firstValue.toString().toLowerCase()
          secondValue = secondValue.toString().toLowerCase()
        }

        if (order === 'ascending') {
          return firstValue === secondValue ? 0 : firstValue > secondValue ? 1 : -1
        } else {
          return firstValue === secondValue ? 0 : firstValue < secondValue ? 1 : -1
        }
      })
    } else if (format === 'numerically') {
      if (order === 'ascending') {
        array.sort((firstValue, secondValue) => firstValue - secondValue)
      } else {
        array.sort((firstValue, secondValue) => secondValue - firstValue)
      }
    }

    return array
  },

  /**
   * Workaround to handle redirect after click on link
   *
   */
  disableLoadErrorForRedirect: function () {
    cy.window().then(win => {
      const triggerAutIframeLoad = () => {
        const AUT_IFRAME_SELECTOR = '.aut-iframe'

        // get the application iframe
        const autIframe = win.parent.document.querySelector(AUT_IFRAME_SELECTOR)

        if (!autIframe) {
          throw new ReferenceError(`Failed to get the application frame using the selector '${AUT_IFRAME_SELECTOR}'`)
        }

        autIframe.dispatchEvent(new Event('load'))
        // remove the event listener to prevent it from firing the load event before each next unload (basically before each successive test)
        win.removeEventListener('beforeunload', triggerAutIframeLoad)
      }

      win.addEventListener('beforeunload', triggerAutIframeLoad)
    })
  },

  /**
   * Verify element condition
   *
   * @param elem - Cypress element to get
   * @param elementCondition - displayed, not displayed, not existing
   */
  verifyElementCondition: function (elem, elementCondition) {
    const supportedElementConditions = ['displayed', 'not displayed', 'not existing']
    switch (elementCondition) {
      case 'displayed':
        return elem.should('be.visible')
      case 'not displayed':
        return elem.should('not.be.visible')
      case 'not existing':
        return elem.should('not.exist')

      default:
        throw new Error(`Element condition: '${elementCondition}' is not supported. Only the following element conditions are supported: ${supportedElementConditions.join(', ')}`)
    }
  },

  /**
   * Verify count of elements
   *
   * @param elem - Cypress element to get
   * @param count - integer
   */
  verifyCount: function (elem, count) {
    return elem.should('have.length', count)
  },

  /**
   * Verify text of elements
   *
   * @param elem - Cypress element to get
   * @param text - expected text
   */
  verifyText: function (elem, text) {
    return elem.should('contain.text', text)
  }
}

export const helpers = Helpers

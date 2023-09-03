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
  }
}

export const helpers = Helpers

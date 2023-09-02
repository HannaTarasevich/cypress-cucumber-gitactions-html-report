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
  }
}

export const helpers = Helpers

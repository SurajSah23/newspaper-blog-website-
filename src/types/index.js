/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {string} category
 * @property {string} author
 * @property {string} date
 * @property {string} imageUrl
 * @property {boolean} featured
 */

/**
 * @typedef {Object} Comment
 * @property {string} id
 * @property {string} articleId
 * @property {string} author
 * @property {string} content
 * @property {string} date
 */

/**
 * @typedef {Object} ArticlesState
 * @property {Article[]} articles
 * @property {boolean} loading
 * @property {string | null} error
 */

/**
 * @typedef {Object} ThemeState
 * @property {boolean} darkMode
 */

/**
 * @typedef {Object} RootState
 * @property {ArticlesState} articles
 * @property {ThemeState} theme
 */

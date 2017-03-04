module.exports = {
    secret: 'secret',

    /**
     * Origins Header Information
     *
     * All clients accessing the API should have strict access. Be sure to
     * explicitly list all client domains for the corresponding environment. 
     * @type {Object}
     */
    prod: {
      origins: [
        // 'http://your-prod-domain.com',
        '*' // NOT SECURE
      ]
    },
    dev: {
      origins: [
        // 'http://your-local-domain.com',
        '*' // NOT SECURE
      ]
    },
    database: 'mongodb://localhost:27017/<mongo-db-name>',
    version: 'v1.0'
};
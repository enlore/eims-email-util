/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

module.exports = {
    Email: require('./lib/email.js'),
    transports: {
        Mailgun: require('./lib/transport-mailgun.js')
    }
}

/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

module.exports = {
    Email: require('./lib/email.js'),

    transports: {
        Mailgun: require('./lib/transport-mailgun.js')
    },

    createTransport(type, config) {
        const Transport = this.transports[type]

        if (!Transport) {
            throw new Error('Email Util: no transport by name ', type)
        }

        const mailer = new Transport(config)

        return {
            send (email) {
                return new Promise ((res, rej) => {
                    mailer.send({ email }, (err, resp) => {
                        if (err) return rej(err)
                        res(resp)
                    })
                })
            },

            validate (email) {
                throw new Error('Email Util: validate method not implemented')
            }
        }
    }
}

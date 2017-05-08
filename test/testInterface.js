/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

import test from 'ava'

import Transport from '../index.js'

Transport.transports.Testmailer = class Testmail {
    constructor (opts) {
        this.configKey = opts.configKey
    }

    send (opts, cb) {
        cb(null)
    }
}

test(t => {
    let mailer = Transport.createTransport('Testmailer', { configKey: true })
    t.is(mailer.configKey, void 0)
})


test(t => {
    let mailer = Transport.createTransport('Testmailer', { configKey: true })

    return mailer.send({})
        .then(() => { t.pass('Send promise resolved') })
        .catch(() => { t.fail('Send promise rejected') })
})


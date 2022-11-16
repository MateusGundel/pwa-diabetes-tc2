const {defineConfig} = require('@vue/cli-service')
module.exports = {
    pwa: {
        name: 'Cuidados Diabetes',
        workboxOptions: {
            exclude: ['_redirects'],
        }
    }
}

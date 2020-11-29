module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/creatiview/'
        : '/',
    outputDir: '../creativiewNode/public/creatiview',
    devServer: {
        host: 'creatiview.be'
    }
};
module.exports = {
    apps: [{
        name: "https-server",
        script: "./app.js",
        args: "-S -b -d false -C ./ssl/certificate.pem -K ./ssl/certificate.key --proxy https://${HOST}/? -p 443 ./client/build/"
    }, {
        name: "api-server",
        script: "./server/index.js"
    }]
}
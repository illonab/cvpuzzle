module.exports = {
    apps: [{
        name: "https-server",
        script: "http-server",
        args: "-S -b -d false -C ./ssl/certificate.pem -K ./ssl/certificate.key --proxy https://${HOST}/? -p 443 ./client/build/"
    }, {
        name: "api-server",
        script: "./server/index.js",
        node_args: "-r dotenv/config",
        args: "dotenv_config_path=.env.production"
    }]
}
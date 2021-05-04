const fs = require('fs');
const apiPath = `${__dirname}/api`;
module.exports = class API {
    static installOne(newRouter, apiRouter, name) {
        const filePath = `${apiPath}/${name}`;
        const router = require(filePath)(newRouter);
        const path = name.split('.')[0];
        if(!path) {
            return console.error(`invalid path: ${path}`);
        }
        apiRouter.use(`/${path}`, router);
    }
    static install(app, express) {
        const apiRouter = express.Router();
        this.express = express;
        if(!fs.existsSync(apiPath)) {
            return console.error('no api directory');
        }

        const files = fs.readdirSync(apiPath);
        for(const name of files) {
            const newRouter = express.Router();
            this.installOne(newRouter, apiRouter, name);
        }
        app.use('/api', apiRouter);
    }

}
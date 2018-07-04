export default (async () => {
        return new Promise((resolve) => {
                const loggerService = magic.rootPath + '/utils/logger';
                global.magic.logger = require(loggerService);
                resolve();
        })
});

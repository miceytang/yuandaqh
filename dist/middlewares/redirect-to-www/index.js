"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    let path = req.path;
    console.log('path:', path);
    console.log('hostname:', req.hostname);
    if (req.hostname == 'yuandaqh.com.cn') {
        res.redirect(301, 'http://www.yuandaqh.com.cn' + path);
    }
    return next();
};
//# sourceMappingURL=index.js.map
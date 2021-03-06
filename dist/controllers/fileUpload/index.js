"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formidable_1 = __importDefault(require("formidable"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class TouFang {
    static submitUserInfo(req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            console.log("------submitUserInfo--------");
            const form = new formidable_1.default.IncomingForm();
            form.encoding = "utf-8";
            form.keepExtensions = true;
            console.log(form.uploadDir);
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.log("form.parse error", err);
                        return reject({
                            code: 100,
                            msg: "提交失败"
                        });
                    }
                    else {
                        let name = fields.txtname;
                        let iphone = fields.txtMobil;
                        let shenfen = fields.pronum;
                        let email = fields.email;
                        let filePath = form.uploadDir + "/" + name + ".txt";
                        let infos = name + "_" + iphone + "_" + shenfen + "_" + email;
                        fs_1.default.writeFile(filePath, infos, function (err) {
                            if (err) {
                                throw err;
                            }
                            console.log("写入用户信息成功");
                            res.write("提交成功");
                            res.end();
                        });
                        // var retValue = {
                        //   code: 200,
                        //   msg: "提交成功"
                        // };
                        // return resolve(retValue);
                    }
                });
            });
        }))();
    }
    static uploadUinFront(req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            console.log("------uploadUinFront--------");
            const form = new formidable_1.default.IncomingForm();
            form.encoding = "utf-8";
            // form.uploadDir = path.resolve(__dirname, "./temp/");
            console.log("form.uploadDir", form.uploadDir);
            form.keepExtensions = true;
            form.maxFieldsSize = 10 * 1024 * 1024; // 10M
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.log("form.parse error", err);
                        return reject({
                            code: 100,
                            msg: "上传失败"
                        });
                    }
                    else {
                        console.log("--------fields---", fields);
                        console.log("--------file---", files);
                        var oldName = path_1.default.basename(files.uinCardFront.name);
                        let filetxt = oldName.split(".")[1];
                        let oldPath = files.uinCardFront.path;
                        var newPath = form.uploadDir + "/" + fields.name + "1" + "." + filetxt;
                        fs_1.default.rename(oldPath, newPath, function () {
                            console.log("换图片名称成功");
                        });
                        // var retValue = {
                        //   code: 200,
                        //   msg: "提交成功"
                        // };
                        // return resolve(retValue);
                        res.write("提交成功");
                        res.end();
                    }
                });
            });
        }))();
    }
    static uploadUinBack(req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            console.log("------uploadUinBack--------");
            const form = new formidable_1.default.IncomingForm();
            form.encoding = "utf-8";
            // form.uploadDir = path.resolve(__dirname, "./temp/");
            console.log("form.uploadDir", form.uploadDir);
            form.keepExtensions = true;
            form.maxFieldsSize = 10 * 1024 * 1024; // 10M
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.log("form.parse error", err);
                        // return reject({
                        //   code: 100,
                        //   msg: "上传失败"
                        // });
                        res.write("提交失败");
                        res.end();
                    }
                    else {
                        console.log("--------fields---", fields);
                        console.log("--------file---", files);
                        var oldName = path_1.default.basename(files.uinCardFront.name);
                        let filetxt = oldName.split(".")[1];
                        let oldPath = files.uinCardFront.path;
                        var newPath = form.uploadDir + "/" + fields.name + "2" + "." + filetxt;
                        fs_1.default.rename(oldPath, newPath, function () {
                            console.log("换图片名称成功");
                        });
                        // var retValue = {
                        //   code: 200,
                        //   msg: "提交成功"
                        // };
                        // return resolve(retValue);
                        res.write("提交成功");
                        res.end();
                    }
                });
            });
        }))();
    }
    //上传银行卡照片
    static uploadBankCard(req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            console.log("------uploadBankCard--------");
            const form = new formidable_1.default.IncomingForm();
            form.encoding = "utf-8";
            // form.uploadDir = path.resolve(__dirname, "./temp/");
            console.log("form.uploadDir", form.uploadDir);
            form.keepExtensions = true;
            form.maxFieldsSize = 10 * 1024 * 1024; // 10M
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.log("form.parse error", err);
                        res.write("提交失败");
                        res.end();
                    }
                    else {
                        console.log("--------fields---", fields);
                        console.log("--------file---", files);
                        var oldName = path_1.default.basename(files.uinCardFront.name);
                        let filetxt = oldName.split(".")[1];
                        let oldPath = files.uinCardFront.path;
                        var newPath = form.uploadDir + "/" + fields.name + "3" + "." + filetxt;
                        fs_1.default.rename(oldPath, newPath, function () {
                            console.log("换图片名称成功");
                        });
                        // var retValue = {
                        //   code: 200,
                        //   msg: "提交成功"
                        // };
                        // return resolve(retValue);
                        res.write("提交成功");
                        res.end();
                    }
                });
            });
        }))();
    }
    //下载图片
    static downImages(req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let name = req.query.name;
                // let pathNameJpg = "/tmp/" + name ;
                // let pathNamePng = "/tmp/" + name ;
                let pathName = "/tmp/" + name;
                console.log("文件路径是：", pathName);
                fs_1.default.readFile(pathName, function (err, data) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("输出文件");
                        res.writeHead(200, { "Content-Type": "image/jpeg" });
                        res.write(data, "binary");
                        res.end();
                    }
                });
            });
        }))();
    }
}
exports.default = TouFang;
//# sourceMappingURL=index.js.map
import express from "express";
import formidable from "formidable";
import path from "path";
import fs from "fs";

import uploadFileService from "../../services/fileUpload/uploadFileService";

export default class TouFang {
  static submitUserInfo(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {
    (async () => {
      console.log("------submitUserInfo--------");
      const form = new formidable.IncomingForm();
      form.encoding = "utf-8";
      form.keepExtensions = true;
      return new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
          if (err) {
            console.log("form.parse error", err);
            return reject({
              code: 100,
              msg: "提交失败"
            });
          } else {
            let name = fields.txtname;
            let iphone = fields.txtMobil;
            let shenfen = fields.pronum;
            let email = fields.email;
            let filePath = form.uploadDir + "/" + name + ".txt";
            let infos = name + "_" + iphone + "_" + shenfen + "_" + email;
            fs.writeFile(filePath, infos, function(err) {
              if (err) {
                throw err;
              }
              console.log("写入用户信息成功");
            });
            var retValue = {
              code: 200,
              msg: "提交成功"
            };
            return resolve(retValue);
          }
        });
      });
    })();
  }
  static uploadUinFront(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {
    (async () => {
      console.log("------uploadUinFront--------");
      const form = new formidable.IncomingForm();
      form.encoding = "utf-8";
      // form.uploadDir = path.resolve(__dirname, "./temp/");
      console.log("form.uploadDir", form.uploadDir);
      form.keepExtensions = true;
      form.maxFieldsSize = 10 * 1024 * 1024; // 10M

      return new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
          if (err) {
            console.log("form.parse error", err);
            return reject({
              code: 100,
              msg: "上传失败"
            });
          } else {
            console.log("--------fields---", fields);
            console.log("--------file---", files);
            var oldName = path.basename(files.uinCardFront.name);
            let filetxt = oldName.split(".")[1];
            let oldPath = files.uinCardFront.path;
            var newPath =
              form.uploadDir + "/" + fields.name + "_SHENFEN_1" + "." + filetxt;
            fs.rename(oldPath, newPath, function() {
              console.log("换图片名称成功");
            });
            var retValue = {
              code: 200,
              msg: "提交成功"
            };
            return resolve(retValue);
          }
        });
      });
    })();
  }
  static uploadUinBack(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {
    (async () => {
      console.log("------uploadUinBack--------");
      const form = new formidable.IncomingForm();
      form.encoding = "utf-8";
      // form.uploadDir = path.resolve(__dirname, "./temp/");
      console.log("form.uploadDir", form.uploadDir);
      form.keepExtensions = true;
      form.maxFieldsSize = 10 * 1024 * 1024; // 10M

      return new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
          if (err) {
            console.log("form.parse error", err);
            return reject({
              code: 100,
              msg: "上传失败"
            });
          } else {
            console.log("--------fields---", fields);
            console.log("--------file---", files);
            var oldName = path.basename(files.uinCardFront.name);
            let filetxt = oldName.split(".")[1];
            let oldPath = files.uinCardFront.path;
            var newPath =
              form.uploadDir + "/" + fields.name + "_SHENFEN_2" + "." + filetxt;
            fs.rename(oldPath, newPath, function() {
              console.log("换图片名称成功");
            });
            var retValue = {
              code: 200,
              msg: "提交成功"
            };
            return resolve(retValue);
          }
        });
      });
    })();
  }
  //上传银行卡照片
  static uploadBankCard(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {
    (async () => {
      console.log("------uploadBankCard--------");
      const form = new formidable.IncomingForm();
      form.encoding = "utf-8";
      // form.uploadDir = path.resolve(__dirname, "./temp/");
      console.log("form.uploadDir", form.uploadDir);
      form.keepExtensions = true;
      form.maxFieldsSize = 10 * 1024 * 1024; // 10M

      return new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
          if (err) {
            console.log("form.parse error", err);
            return reject({
              code: 100,
              msg: "上传失败"
            });
          } else {
            console.log("--------fields---", fields);
            console.log("--------file---", files);
            var oldName = path.basename(files.uinCardFront.name);
            let filetxt = oldName.split(".")[1];
            let oldPath = files.uinCardFront.path;
            var newPath =
              form.uploadDir + "/" + fields.name + "_YINHANG" + "." + filetxt;
            fs.rename(oldPath, newPath, function() {
              console.log("换图片名称成功");
            });
            var retValue = {
              code: 200,
              msg: "提交成功"
            };
            return resolve(retValue);
          }
        });
      });
    })();
  }
  //下载图片
  static downImages(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    (async () => {
      return new Promise((resolve, reject) => {
        let name = req.query.name;
        // let pathNameJpg = "/tmp/" + name ;
        // let pathNamePng = "/tmp/" + name ;
        let pathName = "/tmp/" + name;
        console.log("文件路径是：", pathName);
        fs.readFile(pathName, function(err, data) {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log("输出文件");
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.write(data, "binary");
            res.end();
          }
        });
      });
    })();
  }
}

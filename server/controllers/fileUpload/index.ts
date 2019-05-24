import express from "express";

import uploadFileService from "../../services/fileUpload/uploadFileService";

export default class TouFang {
  static uploadUinFront(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {
    (async () => {
      let id = Number(req.query.expId);
      let expPlatform = Number(req.query.expPlatform);
      let pageCookies = Number(req.query.pageCookies) || 0;
      try {
        let result: any = await uploadFileService.uploadUinFront(req.body);
        if (result === null) {
          result = [];
        }
        return {
          retObj: result
        };
      } catch (err) {
        next(err);
      }
    })();
  }
  static uploadUinBack(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {}
  //新增投放内容
  static uploadBankCard(
    req: express.Request,
    res: Response,
    next: express.NextFunction
  ) {}
}

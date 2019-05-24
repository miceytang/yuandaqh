import express from "express";
import fileUploadController from "@controllers/fileUpload";
// controller引入入口
// import DemoRequest from '@controllers/demoRequest';

const Router: express.Router = express.Router();

/* --------- path: '/cgi-bin/${path}' --------- */
Router.all(
  "/fileUpload/uploadUinFront",
  fileUploadController.uploadUinFront.bind(fileUploadController)
);
Router.all(
  "/fileUpload/uploadUinBack",
  fileUploadController.uploadUinBack.bind(fileUploadController)
);
Router.all(
  "/fileUpload/uploadBankCard",
  fileUploadController.uploadBankCard.bind(fileUploadController)
);
/* --------- path: '/demo' --------- */

export default Router;

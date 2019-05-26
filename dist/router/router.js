"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileUpload_1 = __importDefault(require("@controllers/fileUpload"));
// controller引入入口
// import DemoRequest from '@controllers/demoRequest';
const Router = express_1.default.Router();
/* --------- path: '/cgi-bin/${path}' --------- */
Router.post("/submitUserInfo", fileUpload_1.default.submitUserInfo.bind(fileUpload_1.default));
Router.all("/fileUpload/uploadUinFront", fileUpload_1.default.uploadUinFront.bind(fileUpload_1.default));
Router.all("/fileUpload/uploadUinBack", fileUpload_1.default.uploadUinBack.bind(fileUpload_1.default));
Router.all("/fileUpload/uploadBankCard", fileUpload_1.default.uploadBankCard.bind(fileUpload_1.default));
Router.all("/fileUpload/downImages", fileUpload_1.default.downImages.bind(fileUpload_1.default));
/* --------- path: '/demo' --------- */
exports.default = Router;
//# sourceMappingURL=router.js.map
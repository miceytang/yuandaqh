"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// controller引入入口
const zhongyi_1 = __importDefault(require("@controllers/zhongyi"));
const Router = express_1.default.Router();
/* --------- path: '/(:page).html' --------- */
Router.get("*", zhongyi_1.default.render.bind(zhongyi_1.default));
exports.default = Router;
//# sourceMappingURL=zhongyi.js.map
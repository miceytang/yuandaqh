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
const uploadFileService_1 = __importDefault(require("../../services/fileUpload/uploadFileService"));
class TouFang {
    static uploadUinFront(req, res, next) {
        (() => __awaiter(this, void 0, void 0, function* () {
            let id = Number(req.query.expId);
            let expPlatform = Number(req.query.expPlatform);
            let pageCookies = Number(req.query.pageCookies) || 0;
            try {
                let result = yield uploadFileService_1.default.uploadUinFront(req.body);
                if (result === null) {
                    result = [];
                }
                return {
                    retObj: result
                };
            }
            catch (err) {
                next(err);
            }
        }))();
    }
    static uploadUinBack(req, res, next) { }
    //新增投放内容
    static uploadBankCard(req, res, next) { }
}
exports.default = TouFang;
//# sourceMappingURL=index.js.map
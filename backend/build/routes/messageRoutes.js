"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var messageController_1 = require("../controllers/messageController");
var router = express_1.default.Router();
router.post('/message', messageController_1.handleMessage);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = require("openai");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
    throw new Error('Missing OPENAI_API_KEY');
}
var configuration = new openai_1.Configuration({
    apiKey: openaiApiKey,
});
var openai = new openai_1.OpenAIApi(configuration);
exports.default = openai;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const greeter_js_1 = require("./greeter.js");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    //res.send('Hello, world!');
    res.send(greeter_js_1.test);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map
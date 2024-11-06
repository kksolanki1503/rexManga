// "use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
if (process.env.NODE_ENV == "development") {
  exports.default = {
    baseURL: "http://localhost:5200",
  };
} else {
  exports.default = {
    baseURL: "https://www.crxinsider.com",
  };
}

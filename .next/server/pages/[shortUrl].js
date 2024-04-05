"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[shortUrl]";
exports.ids = ["pages/[shortUrl]"];
exports.modules = {

/***/ "./db/dbConnect.js":
/*!*************************!*\
  !*** ./db/dbConnect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = `${process.env.MONGODB_URI}/shortit`;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxRQUFRLENBQUM7QUFFeEQsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUix3RUFDQTtBQUNKLENBQUM7QUFFRDs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQixLQUFLO1FBQ3ZCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhO1lBQ3RFLE9BQU9BO1FBQ1Q7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHLElBQUk7UUFDckIsTUFBTU0sRUFBRTtJQUNWO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL2RiL2RiQ29ubmVjdC5qcz9mY2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkl9L3Nob3J0aXRgO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/dbConnect.js\n");

/***/ }),

/***/ "./db/models/ShortLink.js":
/*!********************************!*\
  !*** ./db/models/ShortLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shortLinkSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    },\n    shortUrl: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShortLink\", shortLinkSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9tb2RlbHMvU2hvcnRMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxrQkFBa0IsSUFBSUQsd0RBQWUsQ0FDekM7SUFDRUcsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxTQUFTO0lBQUc7SUFDbkNDLEtBQUs7UUFBRUgsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ2pDRSxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFNBQVM7SUFBRztBQUN4QyxHQUNBO0lBQ0VHLFlBQVksSUFBSTtBQUNsQjtBQUdGLE1BQU1DLFlBQ0pWLGtFQUE0QixJQUFJQSxxREFBYyxDQUFDLGFBQWFDO0FBRTlELGlFQUFlUyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL2RiL21vZGVscy9TaG9ydExpbmsuanM/MWJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBzaG9ydExpbmtTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICAgIHVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgc2hvcnRVcmw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuY29uc3QgU2hvcnRMaW5rID1cbiAgbW9uZ29vc2UubW9kZWxzWydTaG9ydExpbmsnXSB8fCBtb25nb29zZS5tb2RlbCgnU2hvcnRMaW5rJywgc2hvcnRMaW5rU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcnRMaW5rO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwic2hvcnRMaW5rU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInVybCIsInNob3J0VXJsIiwidGltZXN0YW1wcyIsIlNob3J0TGluayIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./db/models/ShortLink.js\n");

/***/ }),

/***/ "./pages/[shortUrl].js":
/*!*****************************!*\
  !*** ./pages/[shortUrl].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShortUrlPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"./db/dbConnect.js\");\n/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/ShortLink */ \"./db/models/ShortLink.js\");\n\n\nasync function getServerSideProps(context) {\n    const { shortUrl  } = context.query;\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const shortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        shortUrl\n    });\n    if (shortLink) {\n        return {\n            redirect: {\n                destination: shortLink.url,\n                permanent: false\n            }\n        };\n    }\n    return {\n        notFound: true\n    };\n}\nfunction ShortUrlPage() {\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2hvcnRVcmxdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDTztBQUV2QyxlQUFlRSxtQkFBbUJDLE9BQU8sRUFBRTtJQUNoRCxNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHRCxRQUFRRSxLQUFLO0lBQ2xDLE1BQU1MLHlEQUFTQTtJQUNmLE1BQU1NLFlBQVksTUFBTUwsb0VBQWlCLENBQUM7UUFBRUc7SUFBUztJQUNyRCxJQUFJRSxXQUFXO1FBQ2IsT0FBTztZQUNMRSxVQUFVO2dCQUNSQyxhQUFhSCxVQUFVSSxHQUFHO2dCQUMxQkMsV0FBVyxLQUFLO1lBQ2xCO1FBQ0Y7SUFDRixDQUFDO0lBRUQsT0FBTztRQUNMQyxVQUFVLElBQUk7SUFDaEI7QUFDRixDQUFDO0FBRWMsU0FBU0MsZUFBZTtJQUNyQyxPQUFPLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL3BhZ2VzL1tzaG9ydFVybF0uanM/MjI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvZGIvZGJDb25uZWN0JztcbmltcG9ydCBTaG9ydExpbmsgZnJvbSAnQC9kYi9tb2RlbHMvU2hvcnRMaW5rJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgc2hvcnRVcmwgfSA9IGNvbnRleHQucXVlcnk7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuICBjb25zdCBzaG9ydExpbmsgPSBhd2FpdCBTaG9ydExpbmsuZmluZE9uZSh7IHNob3J0VXJsIH0pO1xuICBpZiAoc2hvcnRMaW5rKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBzaG9ydExpbmsudXJsLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBub3RGb3VuZDogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvcnRVcmxQYWdlKCkge1xuICByZXR1cm4gbnVsbDtcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiU2hvcnRMaW5rIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNob3J0VXJsIiwicXVlcnkiLCJzaG9ydExpbmsiLCJmaW5kT25lIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInVybCIsInBlcm1hbmVudCIsIm5vdEZvdW5kIiwiU2hvcnRVcmxQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[shortUrl].js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[shortUrl].js"));
module.exports = __webpack_exports__;

})();
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktreenode"] = self["webpackChunktreenode"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst tree = (dirPath, depth) => {\n  if (depth < 0) return;else fs.readdir(dirPath, {\n    withFileTypes: true\n  }, async (err, files) => {\n    try {\n      files.forEach(file => {\n        const filePath = path.join(dirPath, file.name);\n        console.log(' '.repeat(depth * 2) + file.name);\n        if (file.isDirectory()) {\n          tree(filePath, depth - 1);\n        }\n      });\n    } catch (err) {\n      console.error(`Ошибка чтения каталога: ${err}`);\n      return;\n    }\n  });\n};\nfunction construction() {\n  const args = process.argv.slice(2);\n  const dirPath = args[0] || '.';\n  const depth = args.includes('--depth') ? parseInt(args[args.indexOf('--depth') + 1]) : Infinity;\n  tree(dirPath, depth);\n}\nconstruction();\n\n//# sourceURL=webpack://treenode/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
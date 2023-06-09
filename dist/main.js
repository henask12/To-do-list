/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-enter.svg */ \"./src/images/arrow-enter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/vertical-dots-icon.svg */ \"./src/images/vertical-dots-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.svg */ \"./src/images/delete.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles */\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\n* {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n:root {\r\n  --text: #414856;\r\n  --disabled: #c0c3d1;\r\n  --background: #fff;\r\n  --font: 'Montserrat', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #e8e8e8;\r\n  font-family: var(--font);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: 3vh;\r\n}\r\n\r\n/* Text Styles */\r\n\r\nh1,\r\np,\r\nbutton {\r\n  font-family: var(--font);\r\n}\r\n\r\nh1 {\r\n  font-size: 1.5rem;\r\n  font-weight: 100;\r\n  line-height: 1;\r\n  text-align: center;\r\n  letter-spacing: -8%;\r\n}\r\n\r\np {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n.container {\r\n  background: var(--background);\r\n  border-radius: 0.5rem;\r\n  border: 1px solid rgba(0, 0, 0, 0.08);\r\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\r\n  max-width: 25rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.clear {\r\n  border: none;\r\n  max-width: 31rem;\r\n  width: 100%;\r\n  height: 2.3rem;\r\n}\r\n\r\n.container .header {\r\n  padding: 1.5rem 0;\r\n}\r\n\r\n.container .header h1 {\r\n  font-size: 1.5rem;\r\n  font-weight: 100;\r\n  line-height: 1;\r\n  text-align: center;\r\n  letter-spacing: -8%;\r\n}\r\n\r\n.container hr {\r\n  margin: 1rem 0;\r\n  border: none;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.container #task-form {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container .input-section {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n  margin-right: 10px;\r\n  position: relative;\r\n}\r\n\r\n.container .enter-icon {\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.container #task-input {\r\n  padding: 8px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  font-style: italic;\r\n}\r\n\r\n.container input[type=text]:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.container .add-btn {\r\n  padding: 8px 16px;\r\n  font-size: 16px;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: no-repeat center/60% url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n.container .edit-btn {\r\n  display: block;\r\n  position: relative;\r\n  padding: 12px 8px;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  margin-left: auto;\r\n  cursor: pointer;\r\n  border: none;\r\n  opacity: 0.6;\r\n  background: no-repeat center/20% url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n.container .edit-btn::before {\r\n  position: absolute;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  font-size: 0.8rem;\r\n  font-weight: 400;\r\n  color: var(--text);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.container .edit-btn:hover::before {\r\n  opacity: 1;\r\n}\r\n\r\n.container .edit-btn:hover,\r\n.container .edit-btn:focus {\r\n  opacity: 1;\r\n}\r\n\r\n.container .btn-delete {\r\n  display: none;\r\n  position: relative;\r\n  padding: 12px 8px;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  margin-left: auto;\r\n  cursor: pointer;\r\n  border: none;\r\n  opacity: 0.6;\r\n  background: no-repeat center/60% url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n}\r\n\r\n.container .btn-delete::before {\r\n  position: absolute;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  font-size: 0.8rem;\r\n  font-weight: 400;\r\n  color: var(--text);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.container .btn-delete:hover::before {\r\n  opacity: 1;\r\n}\r\n\r\n.container .btn-delete:hover,\r\n.container .btn-delete:focus {\r\n  opacity: 1;\r\n}\r\n\r\n.container button:hover {\r\n  background-color: #a1a1a1;\r\n}\r\n\r\n.container #todo-list {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.container #todo-list li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n#todo-list li:hover {\r\n  background-color: #f0f0f0;\r\n  cursor: move;\r\n}\r\n\r\n.container #todo-list li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.container #todo-list .checkbox {\r\n  margin-right: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.clear #clear-completed-button {\r\n  width: 100%;\r\n  padding: 8px 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #d1d1d1;\r\n  color: #747373;\r\n  cursor: pointer;\r\n}\r\n\r\n.container #clear-completed-button:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  text-decoration-thickness: 2px;\r\n  color: var(--disabled);\r\n  cursor: not-allowed;\r\n}\r\n\r\nli.dragging {\r\n  opacity: 1;\r\n}\r\n\r\nli.drag-over {\r\n  border: 2px dashed blue;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/displayTask.js */ \"./src/js/displayTask.js\");\n\n\n\nconst taskForm = document.getElementById('task-form');\nconst taskInput = document.getElementById('task-input');\nconst clearBtn = document.getElementById('clear-completed-button');\n\ntaskForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const description = taskInput.value.trim();\n  if (description !== '') {\n    (0,_js_displayTask_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(description);\n    taskInput.value = '';\n  }\n});\n\nclearBtn.addEventListener('click', (event) => {\n  event.preventDefault();\n  (0,_js_displayTask_js__WEBPACK_IMPORTED_MODULE_1__.clearTasks)();\n});\n\n(0,_js_displayTask_js__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();\n(0,_js_displayTask_js__WEBPACK_IMPORTED_MODULE_1__.populateTaskList)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/js/displayTask.js":
/*!*******************************!*\
  !*** ./src/js/displayTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   clearTasks: () => (/* binding */ clearTasks),\n/* harmony export */   handleDeleteButtonClick: () => (/* binding */ handleDeleteButtonClick),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   makeTaskDescriptionEditable: () => (/* binding */ makeTaskDescriptionEditable),\n/* harmony export */   populateTaskList: () => (/* binding */ populateTaskList),\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks),\n/* harmony export */   setupDragAndDrop: () => (/* binding */ setupDragAndDrop),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusUpdates.js */ \"./src/js/statusUpdates.js\");\n\r\n\r\nlet tasks = [];\r\n\r\nconst taskList = document.getElementById('todo-list');\r\n\r\nconst loadTasks = () => {\r\n  const storedTasks = localStorage.getItem('tasks');\r\n  if (storedTasks) {\r\n    tasks = JSON.parse(storedTasks); // Replace this line\r\n  }\r\n};\r\n\r\nconst saveTasks = () => {\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n};\r\n\r\nconst makeTaskDescriptionEditable = (event) => {\r\n  const taskDescription = event.target;\r\n  taskDescription.setAttribute('contenteditable', 'true'); // Make the task description editable\r\n  taskDescription.focus(); // Focus on the task description element\r\n\r\n  const saveDescription = () => {\r\n    const newDescription = taskDescription.textContent.trim();\r\n    if (newDescription !== '') {\r\n      const listItem = taskDescription.parentElement;\r\n      const index = Array.from(listItem.parentNode.children).indexOf(listItem);\r\n      if (index !== -1) {\r\n        tasks[index].description = newDescription;\r\n        saveTasks();\r\n      }\r\n    }\r\n\r\n    taskDescription.setAttribute('contenteditable', 'false'); // Make the task description non-editable\r\n    taskDescription.removeEventListener('blur', saveDescription); // Remove the blur event listener\r\n  };\r\n\r\n  taskDescription.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Enter') {\r\n      event.preventDefault(); // Prevent the default behavior of the Enter key\r\n      saveDescription();\r\n    }\r\n  });\r\n\r\n  taskDescription.addEventListener('blur', saveDescription);\r\n};\r\n\r\nconst handleDeleteButtonClick = (event) => {\r\n  const deleteButton = event.target;\r\n  const listItem = deleteButton.parentNode;\r\n  const index = Array.from(listItem.parentNode.children).indexOf(listItem);\r\n\r\n  tasks.splice(index, 1); // Remove the task from the array\r\n\r\n  // Adjust the index of remaining tasks\r\n  for (let i = index; i < tasks.length; i += 1) {\r\n    tasks[i].index = i + 1;\r\n  }\r\n\r\n  saveTasks(); // eslint-disable-next-line no-use-before-define\r\n  populateTaskList();\r\n};\r\n\r\nconst setupDragAndDrop = (taskList, tasks) => {\r\n  const listItems = document.querySelectorAll('#todo-list li');\r\n\r\n  let draggedItem = null;\r\n\r\n  function handleDragStart(event) {\r\n    draggedItem = this;\r\n    event.dataTransfer.effectAllowed = 'move';\r\n    event.dataTransfer.setData('text/html', this.innerHTML);\r\n    this.classList.add('dragging');\r\n  }\r\n\r\n  function handleDragOver(event) {\r\n    if (event.preventDefault) {\r\n      event.preventDefault();\r\n    }\r\n    event.dataTransfer.dropEffect = 'move';\r\n    return false;\r\n  }\r\n\r\n  function handleDragEnter() {\r\n    this.classList.add('drag-over');\r\n  }\r\n\r\n  function handleDragLeave() {\r\n    this.classList.remove('drag-over');\r\n  }\r\n\r\n  function handleDrop(event) {\r\n    if (event.stopPropagation) {\r\n      event.stopPropagation();\r\n    }\r\n    if (draggedItem !== this) {\r\n      const draggedIndex = Array.from(taskList.children).indexOf(draggedItem);\r\n      const dropIndex = Array.from(taskList.children).indexOf(this);\r\n\r\n      // Reorder the tasks array based on the drag and drop\r\n      const [draggedTask] = tasks.splice(draggedIndex, 1);\r\n      tasks.splice(dropIndex, 0, draggedTask);\r\n\r\n      // Update the display order of the list items\r\n      taskList.insertBefore(draggedItem, this);\r\n\r\n      saveTasks(); // Save the updated tasks array in local storage\r\n      draggedItem.innerHTML = this.innerHTML;\r\n      this.innerHTML = event.dataTransfer.getData('text/html');\r\n    }\r\n    return false;\r\n  }\r\n\r\n  function handleDragEnd() {\r\n    listItems.forEach((listItem) => {\r\n      listItem.classList.remove('drag-over');\r\n      listItem.classList.remove('dragging');\r\n    });\r\n  }\r\n\r\n  listItems.forEach((listItem) => {\r\n    listItem.addEventListener('dragstart', handleDragStart, false);\r\n    listItem.addEventListener('dragover', handleDragOver, false);\r\n    listItem.addEventListener('dragenter', handleDragEnter, false);\r\n    listItem.addEventListener('dragleave', handleDragLeave, false);\r\n    listItem.addEventListener('drop', handleDrop, false);\r\n    listItem.addEventListener('dragend', handleDragEnd, false);\r\n  });\r\n};\r\n\r\nconst populateTaskList = () => {\r\n  taskList.innerHTML = '';\r\n\r\n  tasks.forEach((task) => {\r\n    const listItem = document.createElement('li');\r\n\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.classList.add('checkbox');\r\n    (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(checkbox, task, listItem, saveTasks);\r\n\r\n    const taskDescription = document.createElement('span');\r\n    taskDescription.addEventListener('click', makeTaskDescriptionEditable);\r\n    taskDescription.textContent = task.description;\r\n\r\n    listItem.appendChild(checkbox);\r\n    listItem.appendChild(taskDescription);\r\n\r\n    const editButton = document.createElement('button');\r\n    const deleteButton = document.createElement('button');\r\n    editButton.setAttribute('type', 'button');\r\n    deleteButton.setAttribute('type', 'button');\r\n    editButton.classList.add('edit-btn');\r\n    editButton.addEventListener('click', () => {\r\n      editButton.style.display = 'none'; // Hide the edit button\r\n      deleteButton.style.display = 'inline'; // Show the delete button\r\n    });\r\n    listItem.appendChild(editButton);\r\n\r\n    deleteButton.classList.add('btn-delete');\r\n    deleteButton.addEventListener('click', () => {\r\n      deleteButton.style.display = 'none'; // Hide the delete button\r\n      editButton.style.display = 'inline'; // Show the edit button\r\n    });\r\n    deleteButton.addEventListener('click', handleDeleteButtonClick);\r\n    listItem.appendChild(deleteButton);\r\n\r\n    // Add event listener to the document\r\n    document.addEventListener('click', (event) => {\r\n      const clickedElement = event.target;\r\n      const isClickedOutsideButtons = !clickedElement.classList.contains('edit-btn') && !clickedElement.classList.contains('btn-delete');\r\n\r\n      if (isClickedOutsideButtons) {\r\n        deleteButton.style.display = 'none'; // Hide the delete button\r\n        editButton.style.display = 'inline'; // Show the edit button\r\n      }\r\n    });\r\n\r\n    if (task.completed) {\r\n      listItem.classList.add('completed');\r\n    }\r\n\r\n    taskList.appendChild(listItem);\r\n  });\r\n  setupDragAndDrop(taskList, tasks);\r\n};\r\n\r\nconst addTask = (description) => {\r\n  const newTask = {\r\n    description,\r\n    completed: false,\r\n    index: tasks.length + 1,\r\n  };\r\n\r\n  tasks.push(newTask);\r\n  populateTaskList();\r\n  saveTasks();\r\n};\r\n\r\nconst clearTasks = () => {\r\n  const incompleteTasks = tasks.filter((task) => !task.completed);\r\n\r\n  // Adjust the index of remaining tasks\r\n  incompleteTasks.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n\r\n  tasks = incompleteTasks;\r\n\r\n  populateTaskList();\r\n  saveTasks();\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/js/displayTask.js?");

/***/ }),

/***/ "./src/js/statusUpdates.js":
/*!*********************************!*\
  !*** ./src/js/statusUpdates.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateStatus = (checkbox, task, listItem, saveTasks) => {\r\n  checkbox.checked = task.completed;\r\n  checkbox.addEventListener('change', () => {\r\n    task.completed = checkbox.checked;\r\n    listItem.classList.toggle('completed', task.completed);\r\n    saveTasks();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/js/statusUpdates.js?");

/***/ }),

/***/ "./src/images/arrow-enter.svg":
/*!************************************!*\
  !*** ./src/images/arrow-enter.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a53a8b5e40dd185d6ba1.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/arrow-enter.svg?");

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"171453614849373b8cca.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/delete.svg?");

/***/ }),

/***/ "./src/images/vertical-dots-icon.svg":
/*!*******************************************!*\
  !*** ./src/images/vertical-dots-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b9d327dccb65150ac7f.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/vertical-dots-icon.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
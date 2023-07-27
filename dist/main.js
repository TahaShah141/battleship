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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --black: #111;\r\n    --white: #ddd;\r\n    --box-size: 30px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: 100px 1fr 50px;\r\n}\r\n\r\n.center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.header, .footer{\r\n    background-color: var(--black);\r\n    color: var(--white);\r\n    padding: 20px;\r\n}\r\n\r\n.header-title {\r\n    font-size: 3rem;\r\n}\r\n\r\n.main {\r\n    background-color: var(--white);\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 100px;\r\n}\r\n\r\n.startup-form {\r\n    padding: 0px 50px;\r\n    align-self: center;\r\n    background-color: var(--black);\r\n    width: 500px;\r\n    height: 400px;\r\n    border-radius: 25px;\r\n    border: 1px solid var(--white);\r\n    box-shadow: 0px 0px 20px #111;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.form-title {\r\n    text-align: center;\r\n    color: var(--white);\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.setup-container {\r\n    --box-size: 20px;\r\n    display: flex;\r\n    gap: 10px;\r\n    margin: 10px 0px;\r\n}\r\n\r\n.setup-board {\r\n    border: 1px solid black;\r\n    height: calc(11*(var(--box-size)+11));\r\n    width: calc(11*var(--box-size)+11);\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(11, var(--box-size));\r\n    grid-template-rows: repeat(11, var(--box-size));\r\n}\r\n\r\n.setup-cell {\r\n    background-color: white;\r\n    border: 1px solid #555;\r\n}\r\n\r\n.ship-segment {\r\n    background-color: #b36df5;\r\n    border: none;\r\n}\r\n\r\n.setup-cell[data-row=9][data-col=0] {\r\n    border: 1px solid red;\r\n}\r\n\r\n.setup-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.setup-button {\r\n    width: 75%;\r\n    height: 50px;\r\n    border-radius: 10px;\r\n    font-size: 0.9rem;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n\r\n.player-view {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.player-name {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\n\r\n.board {\r\n    border: 1px solid black;\r\n    box-shadow: 3px 3px 20px #333;\r\n    height: calc(11*(var(--box-size)+11));\r\n    width: calc(11*var(--box-size)+11);\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(11, var(--box-size));\r\n    grid-template-rows: repeat(11, var(--box-size));\r\n}\r\n\r\n.cell {\r\n    background-color: white;\r\n    border: 1px solid #555;\r\n}\r\n\r\n.cell-heading {\r\n    background-color: #333;\r\n    color: var(--white);\r\n}\r\n\r\n.cell:hover {\r\n    background-color: #bbb;\r\n}\r\n\r\n.cell-heading:hover {\r\n    background-color: #333;\r\n}\r\n\r\n.input-container {\r\n    position: relative;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.input-label {\r\n    position: absolute;\r\n    color: #ddd;\r\n    top: 1.5rem;\r\n    left: 10px;\r\n}\r\n\r\n.input-field {\r\n    flex: 1;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #aaa;\r\n    height: 2rem;\r\n    color: white;\r\n    padding: 0 10px;\r\n}\r\n\r\n.input-field::placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.input-field:focus {\r\n    outline: none;\r\n    padding: 0px 10px;\r\n    border-color: white;\r\n}\r\n\r\n.input-field:focus + .input-label {\r\n    color: white;\r\n    font-size: 1.25rem;\r\n    transform: translateY(-1.5rem);\r\n    transition: transform 0.5s , font-size 0.5s; \r\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLayout: () => (/* binding */ initLayout),\n/* harmony export */   setupLayout: () => (/* binding */ setupLayout)\n/* harmony export */ });\n/* harmony import */ var _gameboard_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard-class */ \"./src/gameboard-class.js\");\n\r\n\r\nfunction newElement(tag, ...classes) {\r\n    let element = document.createElement(tag);\r\n    classes.forEach(cls => element.classList.add(cls));\r\n\r\n    return element;\r\n}\r\n\r\nfunction newPara(text, ...classes) {\r\n    let para = newElement(\"p\", ...classes);\r\n    para.textContent = text;\r\n\r\n    return para;\r\n}\r\n\r\nfunction newInput(placeholderText) {\r\n    let container = newElement(\"div\", \"input-container\", \"center\");\r\n\r\n    let label = newElement(\"label\", \"input-label\");\r\n    label.textContent = placeholderText;\r\n    let input = newElement(\"input\", \"input-field\");\r\n    input.placeholder = placeholderText;\r\n\r\n    container.appendChild(input);\r\n    container.appendChild(label);\r\n\r\n    return container;\r\n}\r\n\r\nfunction initLayout() {\r\n    const body = document.body;\r\n\r\n    const header = getHeader();\r\n    const main = getMain();\r\n    const footer = getFooter();\r\n\r\n\r\n    body.appendChild(header);\r\n    body.appendChild(main);\r\n    body.appendChild(footer);\r\n}\r\n\r\nfunction getHeader() {\r\n    let header = newElement(\"header\", \"header\", \"center\");\r\n\r\n    let title = newElement(\"h1\", \"header-title\");\r\n    title.textContent = \"Battleship\";\r\n\r\n    header.appendChild(title);\r\n    return header;\r\n}\r\n\r\nfunction getMain() {\r\n    let main = newElement(\"div\", \"main\");\r\n    let playerView1 = getPlayerView(1);\r\n    let playerView2 = getPlayerView(2);\r\n\r\n    main.appendChild(playerView1);\r\n    main.appendChild(playerView2);\r\n    return main;\r\n}\r\n\r\nfunction getPlayerView(i) {\r\n    let playerView = newElement(\"div\", \"player-view\", \"center\");\r\n    let name = newPara(`Player ${i}`, \"player-name\");\r\n    let board = getBoard(i);\r\n    playerView.appendChild(name);\r\n    playerView.appendChild(board);\r\n\r\n    return playerView;\r\n}\r\n\r\nfunction getBoard(i) {\r\n    let board = newElement('div', 'board', `player${i}-board`);\r\n\r\n    for (let row = 0; row < 11; row++) {\r\n        for (let col = 0; col < 11; col++) {\r\n            let cell = newElement(\"div\", \"cell\");\r\n\r\n            if (row === 0 && col !== 0) {\r\n                cell.appendChild(newPara(`${String.fromCharCode(64+col)}`));\r\n                cell.classList.add(\"cell-heading\");\r\n                cell.classList.add(\"center\");\r\n            }\r\n            else if (col === 0 && row !== 0) { \r\n                cell.appendChild(newPara(`${row}`));\r\n                cell.classList.add(\"cell-heading\");\r\n                cell.classList.add(\"center\");\r\n            }\r\n            else if (col !== 0 && row !== 0) {\r\n                cell.addEventListener(\"click\", () => cellClicked(i-1, col-1, row-1));\r\n            }\r\n            board.appendChild(cell);\r\n        }\r\n    }\r\n    board.firstChild.classList.add(\"cell-heading\");\r\n    return board;\r\n}\r\n\r\nfunction cellClicked(board, x, y) {\r\n    console.log(`board ${board} clicked at ${x},${y}`);\r\n}\r\n\r\nfunction getFooter() {\r\n    let footer = newElement(\"footer\", \"footer\", \"center\");\r\n    let text = \"Copyright © Taha Shah 2023\";\r\n\r\n    footer.appendChild(newPara(text));\r\n    return footer;\r\n}\r\n\r\n\r\nfunction setupLayout() {\r\n    const body = document.body;\r\n\r\n    const header = getHeader();\r\n    const main = getSetupMain();\r\n    const footer = getFooter();\r\n\r\n    body.appendChild(header);\r\n    body.appendChild(main);\r\n    body.appendChild(footer);\r\n}\r\n\r\nfunction getSetupMain() {\r\n    let main = newElement(\"div\", \"main\");\r\n    let form = newElement(\"div\", \"startup-form\");\r\n\r\n    let title = newElement(\"h3\", \"form-title\");\r\n    title.textContent = \"Setup\";\r\n\r\n    let inputContainer = newInput(\"Player Name\");\r\n\r\n    let boardNbuttons = newElement(\"div\", \"setup-container\");\r\n\r\n    let board = getSetupBoard(1);\r\n    let buttons = getSetupButtons();\r\n\r\n    boardNbuttons.appendChild(board);\r\n    boardNbuttons.appendChild(buttons);\r\n\r\n    form.appendChild(title);\r\n    form.appendChild(document.createElement(\"hr\"));\r\n    form.appendChild(inputContainer);\r\n    form.appendChild(boardNbuttons);\r\n\r\n    main.appendChild(form);\r\n    return(main);\r\n}\r\n\r\nfunction getSetupBoard(i) {\r\n    let board = newElement(\"div\", \"setup-board\");\r\n    let gameboard = (0,_gameboard_class__WEBPACK_IMPORTED_MODULE_0__.defaultGameboard)();\r\n\r\n    for (let row = 0; row < 11; row++) {\r\n        for (let col = 0; col < 11; col++) {\r\n            let cell = newElement(\"div\", \"setup-cell\");\r\n\r\n            if (row === 0 && col !== 0) {\r\n                cell.appendChild(newPara(`${String.fromCharCode(64+col)}`));\r\n                cell.classList.add(\"cell-heading\");\r\n                cell.classList.add(\"center\");\r\n            }\r\n            else if (col === 0 && row !== 0) { \r\n                cell.appendChild(newPara(`${row}`));\r\n                cell.classList.add(\"cell-heading\");\r\n                cell.classList.add(\"center\");\r\n            }\r\n            else if (col !== 0 && row !== 0) {\r\n                cell.dataset.row = row-1;\r\n                cell.dataset.col = col-1;\r\n\r\n                if (gameboard.board[col-1][row-1]) {\r\n                    let segment = gameboard.board[col-1][row-1];\r\n                    cell.classList.add(\"ship-segment\");\r\n                    cell.addEventListener(\"mousedown\", (e) => setupCellPicked(e, gameboard, segment));\r\n                }\r\n                cell.addEventListener(\"mouseenter\", () => mouseEnteredSetupCell(gameboard, col-1, row-1));\r\n                cell.addEventListener(\"mouseleave\", () => mouseLeftSetupCell(gameboard, col-1, row-1));\r\n                cell.addEventListener(\"mouseup\", (e) => setupCellDropped(e, gameboard, col-1, row-1));\r\n            }\r\n            board.appendChild(cell);\r\n        }\r\n    }\r\n    board.firstChild.classList.add(\"cell-heading\");\r\n\r\n\r\n    return board;\r\n}\r\n\r\nlet shipPicked = false;\r\nlet shipInfo = {};\r\n\r\nfunction setupCellPicked(e, gameboard, segment) {\r\n    e.stopPropagation();\r\n    let ship = segment.parent;\r\n    shipInfo.ship = ship;\r\n    shipPicked = true;\r\n    shipInfo.segmentClicked = segment;\r\n    \r\n    let cells = [];\r\n    ship.segments.forEach(seg => {\r\n        cells.push(document.querySelector(`.setup-cell[data-col=\"${seg.x}\"][data-row=\"${seg.y}\"]`));\r\n    })\r\n    \r\n    shipInfo.cells = cells;\r\n    console.log(cells);\r\n    shipInfo.offset = ship.segments.indexOf(segment);\r\n\r\n    shipInfo.prevShow = {x: ship.segments[0].x, y: ship.segments[0].y};\r\n\r\n    gameboard.removeShip(ship);\r\n}\r\n\r\nfunction setupCellDropped(e, gameboard, x, y) {\r\n    e.stopPropagation();\r\n    if (!shipPicked) return;\r\n\r\n    let ship = shipInfo.ship;\r\n    \r\n    let dx = ship.horizontal ? 1 : 0;\r\n    let dy = ship.horizontal ? 0 : 1;\r\n\r\n    let shipX = x-shipInfo.offset*dx;\r\n    let shipY = y-shipInfo.offset*dy;\r\n\r\n    if (!gameboard.shipFits(ship, shipX, shipY)) return;\r\n\r\n    for (let i = 0; i < ship.length; i++) {\r\n        let cell = document.querySelector(`.setup-cell[data-col=\"${shipX+dx*i}\"][data-row=\"${shipY+dy*i}\"]`);\r\n        cell.addEventListener(\"mousedown\", (e) => setupCellPicked(e, gameboard, gameboard.board[shipX+dx*i][shipY+dy*i]));\r\n        shipInfo.cells[i].removeEventListener(\"mousedown\", (e) => setupCellPicked(e, gameboard, segment));\r\n    }\r\n\r\n    gameboard.addShip(ship, shipX, shipY);\r\n    shipPicked = false;\r\n    shipInfo = {};\r\n}\r\n\r\nfunction mouseEnteredSetupCell(gameboard, x, y) {\r\n    if (!shipPicked) return;\r\n\r\n    console.log(\"entered\");\r\n\r\n    let ship = shipInfo.ship;\r\n\r\n    let dx = ship.horizontal ? 1 : 0;\r\n    let dy = ship.horizontal ? 0 : 1;\r\n\r\n    let shipX = x-shipInfo.offset*dx;\r\n    let shipY = y-shipInfo.offset*dy;\r\n\r\n    if (gameboard.shipFits(ship, shipX, shipY)) {\r\n        removeShip(gameboard, ship, shipInfo.prevShow.x, shipInfo.prevShow.y)\r\n        showShip(ship, shipX, shipY);\r\n    } else showShip(ship, shipInfo.prevShow.x, shipInfo.prevShow.y);\r\n}\r\n\r\nfunction showShip(ship, x, y) {\r\n    let dx = ship.horizontal ? 1 : 0;\r\n    let dy = ship.horizontal ? 0 : 1;\r\n\r\n    for (let i = 0; i < ship.length; i++) {\r\n        let cell = document.querySelector(`.setup-cell[data-col=\"${x+dx*i}\"][data-row=\"${y+dy*i}\"]`);\r\n        cell.classList.add(\"ship-segment\")\r\n    }\r\n    \r\n    shipInfo.prevShow.x = x;\r\n    shipInfo.prevShow.y = y;\r\n}\r\n\r\nfunction mouseLeftSetupCell(gameboard, x, y) {\r\n    if (!shipPicked) return;\r\n\r\n    let ship = shipInfo.ship;\r\n\r\n    let dx = ship.horizontal ? 1 : 0;\r\n    let dy = ship.horizontal ? 0 : 1;\r\n\r\n    let shipX = x-shipInfo.offset*dx;\r\n    let shipY = y-shipInfo.offset*dy;\r\n\r\n    removeShip(gameboard, ship, shipX, shipY);\r\n}\r\n\r\nfunction removeShip(gameboard, ship, x, y) {\r\n    \r\n    let dx = ship.horizontal ? 1 : 0;\r\n    let dy = ship.horizontal ? 0 : 1;\r\n\r\n    for (let i = 0; i < ship.length; i++) {\r\n        let cell = document.querySelector(`.setup-cell[data-col=\"${x+dx*i}\"][data-row=\"${y+dy*i}\"]`);\r\n        if (cell && !(gameboard.board[x+dx*i][y+dy*i])) cell.classList.remove(\"ship-segment\");\r\n        else return;\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction getSetupButtons() {\r\n    let buttons = newElement(\"div\", \"setup-buttons\");\r\n    let resetButton = newElement(\"button\", \"setup-button\", \"reset\");\r\n    let randomizeButton = newElement(\"button\", \"setup-button\", \"randomize\");\r\n    let confirmButton = newElement(\"button\", \"setup-button\", \"confirm\");\r\n\r\n    resetButton.textContent = \"Reset\";\r\n    randomizeButton.textContent = \"Randomize\";\r\n    confirmButton.textContent = \"Confirm\";\r\n\r\n    buttons.appendChild(resetButton);\r\n    buttons.appendChild(randomizeButton);\r\n    buttons.appendChild(confirmButton);\r\n\r\n    return buttons;\r\n}\n\n//# sourceURL=webpack://battleship/./src/domStuff.js?");

/***/ }),

/***/ "./src/gameboard-class.js":
/*!********************************!*\
  !*** ./src/gameboard-class.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   defaultGameboard: () => (/* binding */ defaultGameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-class */ \"./src/ship-class.js\");\nconst Ship = __webpack_require__(/*! ./ship-class */ \"./src/ship-class.js\")\r\n;\r\n\r\nclass Gameboard {\r\n    constructor(n=10) {\r\n        this.board = this.initBoard(n)\r\n        this.tries = [];\r\n        for (let i = 0; i < n; i++) {\r\n            this.tries.push([]);\r\n            for (let j = 0; j < n; j++) {\r\n                this.tries[i].push(false);\r\n            }\r\n        }\r\n\r\n        this.ships = [];\r\n    }\r\n\r\n    initBoard(n) {\r\n        let board = [];\r\n        for (let x = 0; x < n; x++) {\r\n            board.push([]);\r\n            for (let y = 0; y < n; y++) {\r\n                board[x].push(null);\r\n            }\r\n        }\r\n        return board;\r\n    }\r\n\r\n    addShip(ship, x, y) {\r\n        ship.segments = [];\r\n        let dx = ship.horizontal ? 1 : 0;\r\n        let dy = ship.horizontal ? 0 : 1;\r\n\r\n        for (let i = 0; i < ship.length; i++) {\r\n            let X = x+i*dx;\r\n            let Y = y+i*dy;\r\n            this.board[X][Y] = ship.addSegment(X, Y);\r\n        }\r\n\r\n        this.ships.push(ship);\r\n    }\r\n\r\n    receiveAttack(x, y) {\r\n        if (this.board[x][y]) this.board[x][y].hit();\r\n        this.tries[x][y] = true;\r\n    }\r\n\r\n    allSunk() {\r\n        for (let i = 0; i < this.ships.length; i++) {\r\n            if (!this.ships[i].sunk) return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    removeShip(ship) {\r\n        ship.segments.forEach(segment => {\r\n            let x = segment.x;\r\n            let y = segment.y;\r\n\r\n            this.board[x][y] = null;\r\n        });\r\n\r\n        let index = this.ships.indexOf(ship);\r\n        if (index !== -1) this.ships.splice(index, 1);\r\n    }\r\n\r\n    shipFits(ship, x, y) {\r\n        let dx = ship.horizontal ? 1 : 0;\r\n        let dy = ship.horizontal ? 0 : 1;\r\n\r\n        for (let offset = 0; offset < ship.length; offset++) {\r\n            let X = x+offset*dx;\r\n            let Y = y+offset*dy;\r\n            if (Y < 0 || Y >= 10 || X < 0 || X >= 10) return false;\r\n            if (this.board[X][Y]) return false;\r\n        }\r\n        return true;\r\n    }\r\n}\r\n\r\nfunction defaultGameboard() {\r\n    let gameboard = new Gameboard();\r\n\r\n    let ships = (0,_ship_class__WEBPACK_IMPORTED_MODULE_0__.getShips)();\r\n\r\n    gameboard.addShip(ships[0], 3, 6);\r\n\r\n    gameboard.addShip(ships[1], 0, 4);\r\n    gameboard.addShip(ships[2], 7, 4);\r\n\r\n    gameboard.addShip(ships[3], 0, 2);\r\n    gameboard.addShip(ships[4], 4, 2);\r\n    gameboard.addShip(ships[5], 8, 2);\r\n    \r\n    gameboard.addShip(ships[6], 0, 0);\r\n    gameboard.addShip(ships[7], 2, 0);\r\n    gameboard.addShip(ships[8], 7, 0);\r\n    gameboard.addShip(ships[9], 9, 0);\r\n\r\n    return gameboard;\r\n}\r\n\r\n// module.exports = Gameboard;\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard-class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\n\r\n\r\n\r\n(0,_domStuff__WEBPACK_IMPORTED_MODULE_1__.setupLayout)();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship-class.js":
/*!***************************!*\
  !*** ./src/ship-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getShips: () => (/* binding */ getShips)\n/* harmony export */ });\nclass Ship {\r\n    constructor(length, isHorizontal=true) {\r\n        this.length = length;\r\n        this.segments = [];\r\n        this.horizontal = isHorizontal;\r\n        this.sunk = false;  \r\n    }\r\n\r\n    isSunk() {\r\n        for (let i = 0; i < this.segments.length; i++) if (!this.segments[i].isHit) return false;\r\n        return true;\r\n    }\r\n\r\n    flip() {\r\n        this.horizontal = !this.horizontal;\r\n    }\r\n\r\n    addSegment(x, y) {\r\n        let seg = new Segment(this, x, y);\r\n        this.segments.push(seg);\r\n\r\n        return seg;\r\n    }\r\n}\r\n\r\nclass Segment {\r\n    constructor(ship, x, y) {\r\n        this.isHit = false;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.parent = ship;\r\n    }\r\n\r\n    hit() {\r\n        this.isHit = true;\r\n        this.parent.sunk = this.parent.isSunk();\r\n    }\r\n}\r\n\r\n\r\nfunction getShips() {\r\n    let ships = [];\r\n    for (let count = 1; count <= 4; count++)\r\n    for (let i = 0; i < count; i++) \r\n    ships.push(new Ship(5-count));\r\n    return ships;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Ship});\n\n//# sourceURL=webpack://battleship/./src/ship-class.js?");

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
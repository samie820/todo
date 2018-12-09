/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n\n\nconst createNewTaskElement = function(taskString) {\n  const listItem = document.createElement(\"li\");\n  const label = document.createElement(\"label\");\n  const deleteButton = document.createElement(\"button\");\n\n  deleteButton.innerText = \"Delete\";\n  deleteButton.className = \"delete\";\n  deleteButton.addEventListener(\"click\", _deleteTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n  label.innerText = taskString;\n\n  listItem.appendChild(label);\n  listItem.appendChild(deleteButton);\n\n  return listItem;\n};\n\nconst addTask = function(e) {\n  const taskList = document.getElementById(\"tasks\");\n  const task = document.getElementById(\"new-task\");\n  if (task.value !== \"\") {\n    const newTaskItem = createNewTaskElement(task.value);\n    taskList.appendChild(newTaskItem);\n    task.value = \"\";\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addTask);\n\n\n//# sourceURL=webpack:///./src/addTask.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst deleteTask = function(e) {\n  console.log(\"Delete Task...\", e);\n  //Remove the parent list item from the ul\n  var listItem = e.target.parentNode;\n  var ul = listItem.parentNode;\n\n  ul.removeChild(listItem);\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteTask);\n\n\n//# sourceURL=webpack:///./src/deleteTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n\n\nconst addTaskButton = document.getElementById(\"addTask\");\naddTaskButton.addEventListener(\"click\", _addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
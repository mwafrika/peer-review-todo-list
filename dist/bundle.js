/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-unused-expressions */\n\n__webpack_require__.e(/*! import() */ \"src_css_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./css/style.css */ \"./src/css/style.css\"));\ndocument.addEventListener('DOMContentLoaded', main);\n\nfunction main() {\n  addTodo();\n  document.querySelector('.todos').addEventListener('dragover', function (e) {\n    e.preventDefault();\n\n    if (!e.target.classList.contains('dragging') && e.target.classList.contains('card')) {\n      var draggingCard = document.querySelector('.dragging');\n\n      var cards = _toConsumableArray(this.querySelectorAll('.card'));\n\n      var currPos = cards.indexOf(draggingCard);\n      var newPos = cards.indexOf(e.target);\n\n      if (currPos > newPos) {\n        this.insertBefore(draggingCard, e.target);\n      } else {\n        this.insertBefore(draggingCard, e.target.nextSibling);\n      }\n\n      var todos = JSON.parse(localStorage.getItem('todos'));\n      var removed = todos.splice(currPos, 1);\n      todos.splice(newPos, 0, removed[0]);\n      localStorage.setItem('todos', JSON.stringify(todos));\n    }\n  });\n  document.querySelectorAll('.edit-btn').forEach(function (edit) {\n    edit.addEventListener('click', function (e) {\n      if (e.target.classList.contains('editInputShow')) {\n        var card = e.target.parentElement;\n        var input = card.querySelector('.editInput');\n        var item = card.querySelector('.item');\n        var deleteIcon = card.querySelector('.clear');\n        var editBtn = card.querySelector('.edit-btn');\n        editBtn.classList.remove('editInputShow');\n        input.classList.add('hide');\n        deleteIcon.classList.add('clearShow');\n        input.classList.add('editInputShow');\n        item.classList.add('hide');\n        editBtn.classList.add('editInputShow');\n        edit.classList.add('hide');\n        edit.classList.remove('editInputShow');\n      }\n    });\n  });\n  var add = document.getElementById('add-btn');\n  var txtInput = document.querySelector('.txt-input');\n  add.addEventListener('click', function () {\n    var item = txtInput.value.trim();\n\n    if (item) {\n      txtInput.value = '';\n      var todos = !localStorage.getItem('todos') ? [] : JSON.parse(localStorage.getItem('todos'));\n      var currentTodo = {\n        id: todos.length + 1,\n        item: item,\n        completed: false\n      };\n      addTodo([currentTodo]);\n      todos.push(currentTodo);\n      localStorage.setItem('todos', JSON.stringify(todos));\n    }\n\n    txtInput.focus();\n  });\n  document.querySelectorAll('.editInput').forEach(function (input) {\n    input.addEventListener('keydown', function (e) {\n      var item = input.value.trim();\n\n      if (e.keyCode === 13) {\n        if (item) {\n          var todos = JSON.parse(localStorage.getItem('todos'));\n          var currentTodo = todos.find(function (todo) {\n            return parseInt(todo.id, 10) === parseInt(input.dataset.id, 10);\n          });\n          editTodo(todos.indexOf(currentTodo) + 1, item);\n        }\n      }\n    });\n  });\n  txtInput.addEventListener('keydown', function (e) {\n    if (e.keyCode === 13) {\n      add.click();\n    }\n  });\n  document.getElementById('clear-completed').addEventListener('click', function () {\n    var deleteIndexes = [];\n    document.querySelectorAll('.card.checked').forEach(function (card) {\n      deleteIndexes.push(_toConsumableArray(document.querySelectorAll('.todos .card')).indexOf(card));\n      card.classList.add('fall');\n      card.addEventListener('animationend', function () {\n        setTimeout(function () {\n          card.remove();\n        }, 100);\n      });\n    });\n    removeManyTodo(deleteIndexes);\n  });\n}\n\nvar updateIndex = function updateIndex(arr) {\n  arr.forEach(function (task, index) {\n    task.id = index + 1;\n  });\n};\n\nvar stateTodo = function stateTodo(index, completed) {\n  var todos = JSON.parse(localStorage.getItem('todos'));\n  todos[index].completed = completed;\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nvar removeTodo = function removeTodo(index) {\n  var todos = JSON.parse(localStorage.getItem('todos'));\n  todos.splice(index, 1);\n  updateIndex(todos);\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nvar editTodo = function editTodo(index, item) {\n  var todos = JSON.parse(localStorage.getItem('todos'));\n  todos[index].item = item;\n  updateIndex(todos);\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nvar removeManyTodo = function removeManyTodo(indexes) {\n  var todos = JSON.parse(localStorage.getItem('todos'));\n  todos = todos.filter(function (todo, index) {\n    return !indexes.includes(index);\n  });\n  updateIndex(todos);\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nvar addTodo = function addTodo() {\n  var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : JSON.parse(localStorage.getItem('todos'));\n\n  if (!todos) {\n    return [];\n  }\n\n  todos.forEach(function (todo) {\n    var card = document.createElement('li');\n    var cbContainer = document.createElement('div');\n    var cbInput = document.createElement('input');\n    var check = document.createElement('span');\n    var item = document.createElement('p');\n    var editInput = document.createElement('input');\n    var button = document.createElement('span');\n    var edit = document.createElement('span');\n    var icon = document.createElement('i');\n    var iconEdit = document.createElement('i');\n    card.classList.add('card');\n    button.classList.add('clear');\n    edit.classList.add('editInputShow');\n    edit.classList.add('edit-btn');\n    cbContainer.classList.add('cb-container');\n    cbInput.classList.add('cb-input');\n    item.classList.add('item');\n    editInput.classList.add('editInput');\n    check.classList.add('check');\n    button.classList.add('clear');\n    icon.classList.add('fa', 'fa-times');\n    iconEdit.classList.add('fas', 'fa-ellipsis-v');\n    card.setAttribute('draggable', true);\n    card.setAttribute('data-id', todo.id);\n    cbInput.setAttribute('type', 'checkbox');\n    item.textContent = todo.item;\n    editInput.setAttribute('type', 'text');\n    editInput.setAttribute('data-id', todo.id);\n    editInput.setAttribute('value', todo.item);\n    editInput.setAttribute('class', 'editInput');\n\n    if (todo.completed) {\n      card.classList.add('checked');\n      cbInput.setAttribute('checked', 'checked');\n    }\n\n    card.addEventListener('dragstart', function () {\n      this.classList.add('dragging');\n    });\n    card.addEventListener('dragend', function () {\n      this.classList.remove('dragging');\n    });\n    cbInput.addEventListener('click', function () {\n      var correspondingCard = this.parentElement.parentElement;\n      var checked = this.checked;\n      stateTodo(_toConsumableArray(document.querySelectorAll('.todos .card')).indexOf(correspondingCard), checked);\n      checked ? correspondingCard.classList.add('checked') : correspondingCard.classList.remove('checked');\n    });\n    button.addEventListener('click', function () {\n      var correspondingCard = this.parentElement;\n      correspondingCard.classList.add('fall');\n      removeTodo(_toConsumableArray(document.querySelectorAll('.todos .card')).indexOf(correspondingCard));\n      correspondingCard.addEventListener('animationend', function () {\n        setTimeout(function () {\n          correspondingCard.remove();\n        }, 100);\n      });\n    });\n    button.appendChild(icon);\n    edit.appendChild(iconEdit);\n    cbContainer.appendChild(cbInput);\n    cbContainer.appendChild(check);\n    card.appendChild(cbContainer);\n    card.appendChild(item);\n    card.appendChild(editInput);\n    card.appendChild(button);\n    card.appendChild(edit);\n    document.querySelector('.todos').appendChild(card);\n  });\n  return todos;\n};\n\n//# sourceURL=webpack://exercise-2/./src/index.js?");

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "exercise-2:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexercise_2"] = self["webpackChunkexercise_2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/todos.scss":
/*!*************************!*\
  !*** ./scss/todos.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/api/StoreApi.js":
/*!****************************!*\
  !*** ./js/api/StoreApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreApi)
/* harmony export */ });
class StoreApi {
    async getGoods() {
        let url = 'https://my-json-server.typicode.com/OlhaKlymas/json-lesson/goods';
        let response = await fetch(url);
        return response.json();
    }

    async getPosts(page) {
        let url = `https://gorest.co.in/public/v2/posts?per_page=2&page=${page}`;
        let response = await fetch(url);
        return response.json();
    }

    async getTodos(page) {
        let url = `https://gorest.co.in/public/v2/todos?per_page=5&page=${page}`;
        let response = await fetch(url);
        return response.json();
    }
}


/***/ }),

/***/ "./js/components/Pagination.js":
/*!*************************************!*\
  !*** ./js/components/Pagination.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
const wrapper = document.querySelector('.pagination__list');
const paginationItems = document.querySelectorAll('.pagination__item');
const url = new URL(window.location);
const params = new URLSearchParams(url.search);

class Pagination {
    init() {
        let page = this._getCurrentPage();

        this._setBtnsEvent();
        this._setActiveBtn(page);
        
        return page;
    }

    _setActiveBtn(page) {
        paginationItems.forEach(btn => {
            btn.classList.remove('pagination__item--active');
        });
        let activeItem = document.querySelector(`.pagination__item[data-page="${page}"]`);
        activeItem.classList.add('pagination__item--active');
    }

    _getCurrentPage() {
        return params.get("page") || 1;
    }

    _setCurrentPage(page) {
        params.set("page", page);
        url.search = params.toString();
        location.href = url.toString();
    }

    _setBtnsEvent() {
        paginationItems.forEach(btn => {
            btn.addEventListener('click', () => {
                let page = btn.dataset.page;
                this._setCurrentPage(page);
            })
        })
    }
}

/***/ }),

/***/ "./js/components/Todos.js":
/*!********************************!*\
  !*** ./js/components/Todos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
/* harmony import */ var _api_StoreApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/StoreApi */ "./js/api/StoreApi.js");


const todosApi = new _api_StoreApi__WEBPACK_IMPORTED_MODULE_0__["default"]();

class Todos {

    parentElem = document.querySelector('.js-todos-list');

    _createTodoItem(todo) {
        const item = document.createElement('div');
        const date = new Date(todo.due_on).toLocaleDateString();
        const status = todo.status;
        const statusClass = status === 'completed' ? 'status--completed' : 'status--pending';
        item.innerHTML = `<li class="todos-list__item todo" data-id="${todo.id}">
                            <div class="todo__img">
                                <img src="./img/todolist.png" alt="todo">
                            </div>
                            <div class="todo__info">
                                <h5 class="todo__title">${todo.title}</h5>
                                <p class="todo__user-id">by user: ${todo.user_id}</p>
                            </div>
                            <div class="todo__text">Todo status: <span class='status ${statusClass}'>${todo.status}<span></div>
                            <p class="todo__text">Due on: ${date}</p>
                        </li>`;
        return item;
    }

    _cleanTodoList(list) {
        list.innerHTML = '';
    }

    _setTodoList(list, html) {
        list.innerHTML = html;
    }

    _showTodos(arr) {
        this._cleanTodoList(this.parentElem);

        const markupPostList = arr.reduce((html, todo) => html += this._createTodoItem(todo).innerHTML, '');
        this._setTodoList(this.parentElem, markupPostList);
    }

    getTodos(page) {
        return todosApi.getTodos(page).then(res => this._showTodos(res));
    }
}

/***/ }),

/***/ "./img/todolist.png":
/*!**************************!*\
  !*** ./img/todolist.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/todolist.png";

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/todos.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/todos */ "./scss/todos.scss");
/* harmony import */ var _img_todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/img/todolist */ "./img/todolist.png");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Pagination */ "./js/components/Pagination.js");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Todos */ "./js/components/Todos.js");

 ////



const todos = new _components_Todos__WEBPACK_IMPORTED_MODULE_3__["default"]();
const pagination = new _components_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"]();

const page = pagination.init();

todos.getTodos(page);




})();

/******/ })()
;
//# sourceMappingURL=todos.086279177d75f62edf5e.js.map
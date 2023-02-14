/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/posts.scss":
/*!*************************!*\
  !*** ./scss/posts.scss ***!
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

/***/ "./js/components/Posts.js":
/*!********************************!*\
  !*** ./js/components/Posts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_StoreApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/StoreApi */ "./js/api/StoreApi.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Pagination */ "./js/components/Pagination.js");



const classStoreApi = new _api_StoreApi__WEBPACK_IMPORTED_MODULE_0__["default"]();
const pagination = new _components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]();

let page = pagination.init();

const postList = document.querySelector('.js-posts-list');

const createPostItem = (post) => {
    const item = document.createElement('div');
    item.innerHTML = `<li class="post-list__item post" data-id="${post.id}">
                        <div class="post__img">
                            <img src="./img/article.jpg" alt="article">
                        </div>
                        <div class="post__info">
                            <h5 class="post__title">${post.title}</h5>
                            <p class="post__user-id">by user: ${post.user_id}</p>
                        </div>
                        <div class="post__text">${post.id}</div>
                        <p class="post__text">${post.body}</p>
                    </li>`;
    return item;
};

const cleanPostList = (list) => {
    list.innerHTML = "";
};

const setPostList = (list, html) => {
    list.innerHTML = html;
};

const showPosts = arr => {
    cleanPostList(postList);

    let markupPostList = arr.reduce((html, post) => html += createPostItem(post).innerHTML, '');
    setPostList(postList, markupPostList);
};

const getPosts = page => {
    return classStoreApi.getPosts(page).then(res => showPosts(res));
};

const initPost = page => {
    getPosts(page);
};

initPost(page);

/***/ }),

/***/ "./img/article.jpg":
/*!*************************!*\
  !*** ./img/article.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/article.jpg";

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
  !*** ./js/posts.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/posts */ "./scss/posts.scss");
/* harmony import */ var _img_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/img/article */ "./img/article.jpg");
/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Posts */ "./js/components/Posts.js");





})();

/******/ })()
;
//# sourceMappingURL=posts.f466dfe998532e4bc024.js.map
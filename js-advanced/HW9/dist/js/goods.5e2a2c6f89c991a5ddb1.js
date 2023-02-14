/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/goods.scss":
/*!*************************!*\
  !*** ./scss/goods.scss ***!
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

/***/ "./js/components/Cart.js":
/*!*******************************!*\
  !*** ./js/components/Cart.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Notification */ "./js/components/Notification.js");


const classNotification = new _components_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]();

const headerCount = document.querySelector('.js-header-count');

class Cart {
    init() {
        let ids = this.getAddedProducts();
        this._setCount(ids.length);
    }

    addToCart(btn, parentClass = '.js-product') {
        let parent = this._getParent(btn, parentClass);
        let id = parent.dataset.id;
        let deleteButton = parent.querySelector('.js-delete-item');
        deleteButton.classList.remove('hidden');

        let tileTitle = parent.querySelector('.tile__title').innerText;
        let addedToCartProducts = this.getAddedProducts();
        addedToCartProducts.push(id);
        this._setProductsToCart(addedToCartProducts)
        this._setCount(addedToCartProducts.length);
        classNotification.show(tileTitle, 'додано');
    }

    removeFromCart(btn, parentClass, isPopup) {
        let parent = this._getParent(btn, parentClass);
        let id = parent.dataset.id;

        let addedToCartProducts = this.getAddedProducts();
        let newProductsList = addedToCartProducts.filter((item) => item != id);
        this._setProductsToCart(newProductsList);
        this._setCount(newProductsList.length);
        if(!isPopup) {
            let deleteButton = parent.querySelector('.js-delete-item');
            let tileTitle = parent.querySelector('.tile__title').innerText;
            deleteButton.classList.add('hidden');
            classNotification.show(tileTitle, 'видалено');
        } else {
            let products = document.querySelectorAll('.js-product');
            products.forEach(product => {
                if(product.dataset.id === id) {
                    let deleteButton = product.querySelector('.js-delete-item');
                    deleteButton.classList.add('hidden');
                }
            })
        }
    }

    _getParent(btn, parentClass) {
        let parent = btn.closest(parentClass);
        return parent;
    }

    getAddedProducts() {
        return localStorage.getItem('cart')?.split(', ') || [];
    }

    _setProductsToCart(arr) {
        arr.length > 0 ? localStorage.setItem('cart', arr.join(', ')) : localStorage.removeItem('cart');
    }

    _setCount(num) {
        headerCount.innerText = num;
    }
}

/***/ }),

/***/ "./js/components/Goods.js":
/*!********************************!*\
  !*** ./js/components/Goods.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Goods)
/* harmony export */ });
/* harmony import */ var _api_StoreApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/StoreApi */ "./js/api/StoreApi.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Cart */ "./js/components/Cart.js");
/* harmony import */ var _components_PopupCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PopupCart */ "./js/components/PopupCart.js");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Popup */ "./js/components/Popup.js");





const filterSelect = document.querySelector('.js-goods-filter');
const sortInputs = document.querySelectorAll('.js-goods-sort');
const headerCount = document.querySelector('.js-header-count');
const popupCart = document.querySelector('.js-popup-cart');
const popupOrder = document.querySelector('.js-popup-order');

const classStoreApi = new _api_StoreApi__WEBPACK_IMPORTED_MODULE_0__["default"]();
const classCart = new _components_Cart__WEBPACK_IMPORTED_MODULE_1__["default"]();
const classPopupCart = new _components_PopupCart__WEBPACK_IMPORTED_MODULE_2__["default"](popupCart);
const classPopupOrder = new _components_Popup__WEBPACK_IMPORTED_MODULE_3__["default"](popupOrder);

const ids = classCart.getAddedProducts();

class Goods {
    getSearchParams(key) {
        let currentUrl = window.location;
        let url = new URL(currentUrl);
        let params = new URLSearchParams(url.search);
        let search = params.get(key);
    
        if(search) {
            this._setCurrentOption(search);
        }
        
        classStoreApi.getGoods().then(result => {
            this._showProducts(result, search);
            this._setSort(result);
            this._setFilter(result);
            this._showDeleteButton(ids);
            this._setBtnProductsEvent();
            this._setCountEvent(result);
        })
    }

    _showProducts(goods, filterBy){
        let productList = document.querySelector('.product-list');
        productList.innerHTML = '';
    
        switch(filterBy) {
            case 'all': 
                goods = [...goods];
                break;
            case 'new':
            case 'sale':
                goods = goods.filter(item => item.badge === filterBy);
                break;
            case 'low-price':
                goods = goods.filter(item => item.price.current <= 1000);
                break;
            case 'high-price':
                goods = goods.filter(item => item.price.current > 1000);
                break;
        }
    
        goods.forEach(item => {
            const article = document.createElement('article');
            article.classList.add('product-list__item', 'tile', 'js-product');
            article.setAttribute('data-id', item.id);
    
            article.innerHTML = `
            <a href="${item.href}" class="tile__link">
                <span class="tile__top">
                    <span class="tile__badge tile__badge--${item.badge}">${item.badge}</span>
                    <span class="tile__delete hidden js-delete-item"> 
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6043_11153)">
                            <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6043_11153">
                            <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                </span>
                <span class="tile__image">
                    <img src="${item.images[0].preview}" alt="${item.title}">
                </span>
                <span class="tile__title">${item.title}</span>
                <span class="tile__info">
                    <span class="tile__price">
                        <span class="tile__old-price">${item.price.old} ₴</span>
                        <span class="tile__new-price">${item.price.current} ₴</span>
                    </span>
                    <button class="btn js-add-to-cart-btn">Купити</button>
                </span>
            </a>
        `;
            productList.appendChild(article);
        })
    }

    _setSort(arr){
        sortInputs.forEach(input => input.addEventListener('change', (e) => this._sortProducts(e, arr)))
    }

    _setFilter(arr){
        filterSelect.addEventListener('change', e => this._getFilteredProducts(e, arr))
    }

    _showDeleteButton(ids) {
        let products = document.querySelectorAll('.js-product');
        products.forEach(function (product) {
            if (ids.includes(product.dataset.id)) {
                let deleteButton = product.querySelector('.js-delete-item');
                deleteButton.classList.remove('hidden');
            }
        })
    }
    
    _setCountEvent(products) {
        headerCount.addEventListener('click', () => {
            let addedToCartProducts = classCart.getAddedProducts()
            if(addedToCartProducts.length > 0) {
                classPopupCart.show(addedToCartProducts, products);
            }
        });
    }

    _setBtnProductsEvent() {
        let deleteButtons = document.querySelectorAll('.js-delete-item');
        let addToCartButtons = document.querySelectorAll('.js-add-to-cart-btn');
    
        deleteButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                classCart.removeFromCart(btn, '.product-list__item');
            })
        });
    
        addToCartButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                classCart.addToCart(button);
            })
        });
    }

    _sortProducts(e, products) {
        let value = e.target.value;
        let sortedProducts = [...products]
    
        switch(value) {
            case 'price':
                sortedProducts = products.sort((a, b) => a.price.current > b.price.current ? 1 : -1);
                break;
            case 'alphabet':
                sortedProducts = products.sort((a, b) => a.title > b.title ? 1 : -1);
                break;
        }
        
        this.showProducts(sortedProducts)
    }

    _getFilteredProducts(e, products) {
        let value = e.target.value;
        let filteredProducts = null;
    
        if(value == 'all') {
            this._setSearchParams('filter', '')
            filteredProducts = [...products];
        } else {
            this._setSearchParams('filter', value)
            filteredProducts = products.filter(item => item.tag_list.includes(value))
        }
    
        this._showProducts(filteredProducts)
    }
    
    _setSearchParams(key, value) {
        let currentUrl = window.location;
        let url = new URL(currentUrl);
        let params = new URLSearchParams(url.search);
        
        if(value === '') {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        url.search = params.toString();
        window.location.href = url.toString();
    }
    
    _setCurrentOption(val){
        filterSelect.querySelector(`option[value=${val}]`).setAttribute('selected', 'selected')
    }
}

/***/ }),

/***/ "./js/components/Notification.js":
/*!***************************************!*\
  !*** ./js/components/Notification.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notification)
/* harmony export */ });
const notification = document.querySelector('.js-notification');
const notificationText = document.querySelector('.js-notification-content');
// const notificationClose = document.querySelector('.js-notification-close');

class Notification {
    constructor() {
        this.activeClass = 'notification--active'
    }

    show(product, text) {
        notification.classList.add(this.activeClass);
        notificationText.innerText = `Продукт ${product} успішно ${text}!`
        setTimeout(() => this.hide(), 3000);
        // notificationClose.addEventListener('click', () => this.hide())
    }

    hide() {
        notification.classList.remove(this.activeClass);
    }
}

/***/ }),

/***/ "./js/components/Popup.js":
/*!********************************!*\
  !*** ./js/components/Popup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
    constructor(el){
        this.el = el,
        this.closeBtn = this.el.querySelector('.js-popup-close'),
        this.activeClass = 'popup--active'
    }

    hide() {
        this.el.classList.remove(this.activeClass);
    }

    show() {
        this.el.classList.add(this.activeClass);
        this._setCloseBtnEvent();
    }

    _setCloseBtnEvent() {
        this.closeBtn.addEventListener('click', () => this.hide());
    }
}

/***/ }),

/***/ "./js/components/PopupCart.js":
/*!************************************!*\
  !*** ./js/components/PopupCart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupCart)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./js/components/Popup.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Cart */ "./js/components/Cart.js");


const popupCartList = document.querySelector('.js-popup-cart-list');


const classCart = new _components_Cart__WEBPACK_IMPORTED_MODULE_1__["default"]();

class PopupCart extends _Popup__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(el) {
        super(el)

        this.cartList = this.el.querySelector('.js-popup-cart-list')
    }

    show(ids, goods) {
        super.show();

        this.cartList.innerHTML = '';
        goods.forEach(item => {
            if(ids.includes(String(item.id))) {
                let filtered = ids.filter(el => el === String(item.id));
                let counter = filtered.length;
                let itemList = document.createElement('li');
                itemList.className = "popup-cart__list-item cart-item";
                itemList.dataset.id = item.id;
                itemList.innerHTML = `<span class="cart-item__img">
                                        <img src="${item.images[0].preview}" alt="${item.title}">
                                    </span>
                                    <span class="cart-item__info">
                                        <a href="${item.href}" class="cart-item__link">
                                            <span class="cart-item__title">${item.title}</span>
                                            <span class="cart-item__price">
                                                <span class="tile__count">${counter}</span>
                                                <span class="tile__price">Вартість - ${item.price.current} ₴</span>
                                                <span class="tile__total-price">Сума - ${item.price.current * counter} ₴</span>
                                            </span>
                                        </a>
                                    </span>
                                    <span class="cart-item__remove js-cart-remove">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_6043_11153)">
                                            <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_6043_11153">
                                            <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </span>`;
                popupCartList.appendChild(itemList);
            }
        });
        this._setRemoveBtn();
    }

    _setRemoveBtn() {
        let removeBtns = document.querySelectorAll('.js-cart-remove');
    
        removeBtns.forEach(btn => btn.addEventListener('click', function(){
            let parent = btn.closest('.cart-item');
            parent.classList.add('hidden');
            classCart.removeFromCart(btn, '.cart-item', true)
        }))
    }
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/goods.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_goods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/goods */ "./scss/goods.scss");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Popup */ "./js/components/Popup.js");
/* harmony import */ var _components_PopupCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/PopupCart */ "./js/components/PopupCart.js");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Notification */ "./js/components/Notification.js");
/* harmony import */ var _components_Goods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Goods */ "./js/components/Goods.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Cart */ "./js/components/Cart.js");


console.log('my goods')


;





console.log('main')

const popupCart = document.querySelector('.js-popup-cart');
const popupOrder = document.querySelector('.js-popup-order');
const showOrderBtn = document.querySelector('.js-show-order');
// const headerCount = document.querySelector('.js-header-count');
// const notification = document.querySelector('.js-notification');
// const notificationText = document.querySelector('.js-notification-content');

const classPopupCart = new _components_PopupCart__WEBPACK_IMPORTED_MODULE_2__["default"](popupCart);
const classPopupOrder = new _components_Popup__WEBPACK_IMPORTED_MODULE_1__["default"](popupOrder);
const classNotification = new _components_Notification__WEBPACK_IMPORTED_MODULE_3__["default"]();
const classGoods = new _components_Goods__WEBPACK_IMPORTED_MODULE_4__["default"]();
const classCart = new _components_Cart__WEBPACK_IMPORTED_MODULE_5__["default"]();

classCart.init();

classGoods.getSearchParams('filter')

showOrderBtn.addEventListener('click', () => {
    classPopupCart.hide();
    classPopupOrder.show();
})

})();

/******/ })()
;
//# sourceMappingURL=goods.5e2a2c6f89c991a5ddb1.js.map
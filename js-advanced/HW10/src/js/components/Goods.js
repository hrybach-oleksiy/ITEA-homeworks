import StoreApi from '../api/StoreApi';
import Cart from '@components/Cart';
import PopupCart from '@components/PopupCart';
import Popup from '@components/Popup';

const filterSelect = document.querySelector('.js-goods-filter');
const sortInputs = document.querySelectorAll('.js-goods-sort');
const headerCount = document.querySelector('.js-header-count');
const popupCart = document.querySelector('.js-popup-cart');
const popupOrder = document.querySelector('.js-popup-order');

const classStoreApi = new StoreApi();
const classCart = new Cart();
const classPopupCart = new PopupCart(popupCart);
const classPopupOrder = new Popup(popupOrder);

const ids = classCart.getAddedProducts();

export default class Goods {
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
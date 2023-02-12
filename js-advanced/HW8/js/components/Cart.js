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
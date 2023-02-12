class PopupCart extends Popup {
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
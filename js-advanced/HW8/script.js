const popupCart = document.querySelector('.js-popup-cart');
const popupOrder = document.querySelector('.js-popup-order');
const showOrderBtn = document.querySelector('.js-show-order');
const popupCartList = document.querySelector('.js-popup-cart-list');
// const headerCount = document.querySelector('.js-header-count');
const filterSelect = document.querySelector('.js-goods-filter');
const sortInputs = document.querySelectorAll('.js-goods-sort');
// const notification = document.querySelector('.js-notification');
// const notificationText = document.querySelector('.js-notification-content');

const classPopupCart = new PopupCart(popupCart);
const classPopupOrder = new Popup(popupOrder);
const classNotification = new Notification();
const classStoreApi = new StoreApi();
const classGoods = new Goods();
const classCart = new Cart();

const ids = classCart.getAddedProducts();
classCart.init();

classGoods.getSearchParams('filter')

showOrderBtn.addEventListener('click', () => {
    classPopupCart.hide();
    classPopupOrder.show();
})


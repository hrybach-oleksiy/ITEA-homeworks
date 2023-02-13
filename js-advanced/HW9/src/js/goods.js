import '@scss/goods';

console.log('my goods')


import Popup from '@components/Popup';
import PopupCart from '@components/PopupCart';
import Notification from '@components/Notification';
import Goods from '@components/Goods';
import Cart from '@components/Cart';

console.log('main')

const popupCart = document.querySelector('.js-popup-cart');
const popupOrder = document.querySelector('.js-popup-order');
const showOrderBtn = document.querySelector('.js-show-order');
// const headerCount = document.querySelector('.js-header-count');
// const notification = document.querySelector('.js-notification');
// const notificationText = document.querySelector('.js-notification-content');

const classPopupCart = new PopupCart(popupCart);
const classPopupOrder = new Popup(popupOrder);
const classNotification = new Notification();
const classGoods = new Goods();
const classCart = new Cart();

classCart.init();

classGoods.getSearchParams('filter')

showOrderBtn.addEventListener('click', () => {
    classPopupCart.hide();
    classPopupOrder.show();
})

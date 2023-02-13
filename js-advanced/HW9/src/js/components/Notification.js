const notification = document.querySelector('.js-notification');
const notificationText = document.querySelector('.js-notification-content');
// const notificationClose = document.querySelector('.js-notification-close');

export default class Notification {
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
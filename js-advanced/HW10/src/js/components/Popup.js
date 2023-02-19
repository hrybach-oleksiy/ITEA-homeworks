export default class Popup {
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
const wrapper = document.querySelector('.pagination__list');
const paginationItems = document.querySelectorAll('.pagination__item');
const todosElem = document.querySelector('.todos');////
const todosParentElem = document.querySelector('.js-todos-list');/////
const url = new URL(window.location);
const params = new URLSearchParams(url.search);

export default class Pagination {
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
            });
        });
    }

    _createSpinner() {
        const spinner = document.createElement('div');
        spinner.innerHTML =
            `
                <div ></div >
                <div></div>
                <div></div>
                <div></div>
         `;
        spinner.classList.add('lds-ring');
        return spinner;

    }

    addSpinner(parent) {
        const spinner = this._createSpinner();
        spinner.classList.add('show');
        parent.append(spinner);
    }

    removeSpinner() {
        const spinner = document.querySelector('.lds-ring');
        spinner.classList.remove('show');
    }
}

class Pagination {

    constructor(btnClass) {
        this.btnClass = btnClass;
    }

    getPage() {
        const currentURL = new URL(window.location);
        const params = new URLSearchParams(currentURL.search);
        const page = params.get('page') || 1;
        return page;
    }

    setURLParams(value) {
        const currentURL = new URL(window.location);
        const params = new URLSearchParams(currentURL.search);

        params.set('page', value);

        currentURL.search = params.toString();
        window.location.href = currentURL.toString();
    }

    getActiveBtn() {
        return document.querySelector(`.${this.btnClass}--active`);
    }

    getCurrentBtn() {
        return document.querySelector(`[data-page="${this.getPage()}"]`);
    }

    setActiveBtn() {
        const activeBtn = this.getActiveBtn();
        const currentBtn = this.getCurrentBtn();
        activeBtn.classList.remove(`${this.btnClass}--active`);
        currentBtn.classList.add(`${this.btnClass}--active`);
    }

    changePage(parent) {
        parent.addEventListener('click', event => {
            const currentBtn = event.target;
            const currentPage = currentBtn.dataset.page;

            if (currentBtn.classList.contains(`${this.btnClass}`)) {
                this.setURLParams(currentPage);
            }
        });
    }
}

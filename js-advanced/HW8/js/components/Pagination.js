
class Pagination {

    constructor(btnClass, page) {
        this.btnClass = btnClass;
        this.page = page;
    }

    getActiveBtn() {
        return document.querySelector(`.${this.btnClass}--active`);
    }

    getCurrentBtn() {
        return document.querySelector(`[data-page="${this.page}"]`);
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
                user.setURLParams(currentPage);
            }
        });
    }
}

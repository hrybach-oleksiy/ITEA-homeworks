'use strict';
const usersListElem = document.querySelector('.js-users-list');
const paginationList = document.querySelector('.pagination__list');

const userApi = new StoreApi();
const user = new User();
const pagination = new Pagination('pagination__item');
const page = pagination.getPage();

user.getUsers(page);

pagination.changePage(paginationList);
pagination.setActiveBtn();


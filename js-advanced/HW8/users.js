'use strict';
const usersListElem = document.querySelector('.js-users-list');
const paginationList = document.querySelector('.pagination__list');
const userApi = new StoreApi();
const user = new User();
user.getURLParams();
const page = user.getPage();

const pagination = new Pagination('pagination__item', page);
pagination.changePage(paginationList, 'pagination__item');


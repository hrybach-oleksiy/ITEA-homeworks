'use strict';
const usersListElem = document.querySelector('.js-users-list');
const userClassNames = {
    userItem: 'users__item',
    user: 'user',
    userWrapper: 'user__wrapper',
    userImgWrapper: 'user__img',
    userInfo: 'user__info',
    userName: 'user__name',
    userEmail: 'user__email',
};
const paginationList = document.querySelector('.pagination__list');
const currentURL = new URL(window.location);
const params = new URLSearchParams(currentURL.search);

const getUsers = async (page) => {
    const url = `https://gorest.co.in/public/v2/users?page=${page}&per_page=2`;
    const response = await fetch(url);
    return response.json();
};

const createElem = (tag, classNames) => {
    const elem = document.createElement(tag);
    elem.classList.add(classNames);

    return elem;
};

const showUsers = users => {
    users.forEach(user => {
        const userGender = user.gender === 'female' ? 'women' : 'men';
        const userStatus = user.status === 'active' ? 'active' : 'inactive';

        const li = document.createElement('li');
        li.classList.add('users__item', 'user', `user--${userStatus}`);
        li.dataset.id = user.id;

        const userWrapper = createElem('div', userClassNames.userWrapper);
        li.append(userWrapper);

        const userImgWrapper = createElem('div', userClassNames.userImgWrapper);
        userWrapper.append(userImgWrapper);

        const userImg = createElem('img');
        userImg.src = `./img/${userGender}.png`;
        userImg.alt = userGender;
        userImgWrapper.append(userImg);

        const userInfoElem = createElem('div', userClassNames.userInfo);
        userWrapper.append(userInfoElem);

        const userNameElem = createElem('p', userClassNames.userName);
        userNameElem.textContent = user.name;
        userInfoElem.append(userNameElem);

        const userEmailElem = createElem('p', userClassNames.userEmail);
        userEmailElem.textContent = user.email;
        userInfoElem.append(userEmailElem);

        usersListElem.append(li);

    });
};

const setURLParams = page => {
    params.set('page', page);
    currentURL.search = params.toString();
    window.location.href = currentURL.toString();
};

const getURLParams = () => {
    const page = params.get('page') || 1;
    const currentPaginationBtn = document.querySelector(`[data-page="${page}"]`);

    if (currentPaginationBtn) {
        const activePaginationBtn = document.querySelector('.pagination__item--active');
        activePaginationBtn.classList.remove('pagination__item--active');
        currentPaginationBtn.classList.add('pagination__item--active');
    }

    getUsers(page)
        .then(users => {
            showUsers(users);
        })
        .catch(err => console.log(err));
};

getURLParams();



paginationList.addEventListener('click', event => {
    const currentBtn = event.target;
    const currentPage = event.target.dataset.page;

    if (currentBtn.classList.contains('pagination__item')) {
        setURLParams(currentPage);
    }
});

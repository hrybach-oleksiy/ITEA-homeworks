import StoreApi from '../api/StoreApi';
import Pagination from '@components/Pagination';

const classStoreApi = new StoreApi();
const pagination = new Pagination();

let page = pagination.init();

const postList = document.querySelector('.js-posts-list');

const createPostItem = (post) => {
    const item = document.createElement('div');
    item.innerHTML = `<li class="post-list__item post" data-id="${post.id}">
                        <div class="post__img">
                            <img src="./img/article.jpg" alt="article">
                        </div>
                        <div class="post__info">
                            <h5 class="post__title">${post.title}</h5>
                            <p class="post__user-id">by user: ${post.user_id}</p>
                        </div>
                        <div class="post__text">${post.id}</div>
                        <p class="post__text">${post.body}</p>
                    </li>`;
    return item;
};

const cleanPostList = (list) => {
    list.innerHTML = "";
};

const setPostList = (list, html) => {
    list.innerHTML = html;
};

const showPosts = arr => {
    cleanPostList(postList);

    let markupPostList = arr.reduce((html, post) => html += createPostItem(post).innerHTML, '');
    setPostList(postList, markupPostList);
};

const getPosts = page => {
    return classStoreApi.getPosts(page).then(res => showPosts(res));
};

const initPost = page => {
    getPosts(page);
};

initPost(page);
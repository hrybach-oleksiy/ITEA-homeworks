import StoreApi from '../api/StoreApi';

const classStoreApi = new StoreApi()

const postList = document.querySelector('.js-posts-list');
const posts = [];

// export default class Posts {
//     constructor() {
//         this.posts = []
//     }

//     init(page) {
//         this._getPosts(page)
//     }

//     _getPosts(page) {
//         this.posts = classStoreApi.getPosts(page).then(res => this._showPosts(res));
//     }

//     _showPosts(arr) {
//         postList.innerHTML = "";
//         arr.forEach(post => {
//             const li = document.createElement('li');
//             li.className = 'post-list__item post'
//             li.dataset.id = post.id
//             li.innerHTML = `<div class="post__img">
//                                 <img src="./img/article.jpg" alt="article">
//                             </div>
//                             <div class="post__info">
//                                 <h5 class="post__title">${post.title}</h5>
//                                 <p class="post__user-id">by user: ${post.user_id}</p>
//                             </div>
//                             <div class="post__text">${post.id}</div>
//                             <p class="post__text">${post.body}</p>`

//             postList.appendChild(li);
//         });      
//     }
// }


const init = page => {
    this._getPosts(page)
}

const getPosts = page => {
    this.posts = classStoreApi.getPosts(page).then(res => this._showPosts(res));
}

const showPosts = arr => {
    postList.innerHTML = "";
    arr.forEach(post => {
        const li = document.createElement('li');
        li.className = 'post-list__item post'
        li.dataset.id = post.id
        li.innerHTML = `<div class="post__img">
                            <img src="./img/article.jpg" alt="article">
                        </div>
                        <div class="post__info">
                            <h5 class="post__title">${post.title}</h5>
                            <p class="post__user-id">by user: ${post.user_id}</p>
                        </div>
                        <div class="post__text">${post.id}</div>
                        <p class="post__text">${post.body}</p>`

        postList.appendChild(li);
    });      
}
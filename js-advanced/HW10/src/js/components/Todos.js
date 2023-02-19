import StoreApi from '../api/StoreApi';
import Pagination from '@components/Pagination';

const todosApi = new StoreApi();
const parentElem = document.querySelector('.js-todos-list');
const pagination = new Pagination();
const page = pagination.init();


function createTodoItem(todo) {
    const item = document.createElement('div');
    const date = new Date(todo.due_on).toLocaleDateString();
    const status = todo.status;
    const statusClass = status === 'completed' ? 'status--completed' : 'status--pending';
    item.innerHTML = `<li class="todos-list__item todo" data-id="${todo.id}">
                        <div class="todo__img">
                            <img src="./img/todolist.png" alt="todo">
                        </div>
                        <div class="todo__info">
                            <h5 class="todo__title">${todo.title}</h5>
                            <p class="todo__user-id">by user: ${todo.user_id}</p>
                        </div>
                        <div class="todo__text">Todo status: <span class='status ${statusClass}'>${todo.status}<span></div>
                        <p class="todo__text">Due on: ${date}</p>
                    </li>`;
    return item;
}

function cleanTodoList(list) {
    list.innerHTML = '';
}

function setTodoList(list, html) {
    list.innerHTML = html;
}

function showTodos(arr) {
    cleanTodoList(parentElem);

    const markupPostList = arr.reduce((html, todo) => html += createTodoItem(todo).innerHTML, '');
    setTodoList(parentElem, markupPostList);
}

function getTodos(page) {
    return todosApi.getTodos(page)
        .then(res => {
            showTodos(res);

        });
    // .finally(() => {
    //     pagination.removeSpinner(parentElem);
    // });
}

function initTodos(page) {
    getTodos(page);
}

initTodos(page);
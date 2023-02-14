import '@scss/todos';
import todolistImg from '@/img/todolist'; ////
import Pagination from './components/Pagination';
import Todos from './components/Todos';

const todos = new Todos();
const pagination = new Pagination();

const page = pagination.init();

todos.getTodos(page);




export default class StoreApi {
    async getGoods() {
        let url = 'https://my-json-server.typicode.com/OlhaKlymas/json-lesson/goods';
        let response = await fetch(url);
        return response.json();
    }

    async getPosts(page) {
        let url = `https://gorest.co.in/public/v2/posts?per_page=2&page=${page}`;
        let response = await fetch(url);
        return response.json();
    }

    async getTodos(page) {
        let url = `https://gorest.co.in/public/v2/todos?per_page=5&page=${page}`;
        let response = await fetch(url);
        return response.json();
    }
}

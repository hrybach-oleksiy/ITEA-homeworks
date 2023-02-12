class StoreApi {
    async getGoods() {
        let url = 'https://my-json-server.typicode.com/OlhaKlymas/json-lesson/goods';
        let response = await fetch(url);
        return response.json();
    }

    async getUsers(page) {
        const url = `https://gorest.co.in/public/v2/users?page=${page}&per_page=2`;
        const response = await fetch(url);
        return response.json();
    }
}

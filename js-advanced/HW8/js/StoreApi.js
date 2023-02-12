class StoreApi {
    async getGoods() {
        let url = 'https://my-json-server.typicode.com/OlhaKlymas/json-lesson/goods';
        let response = await fetch(url);
        return response.json();
    }
}

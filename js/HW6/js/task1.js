// 1.  Об'єкт user містить три властивості. Властивість data містить п'ять властивостей, одна з яких містить масив friends. Завершіть запис функції addFriend, яка приймає об'єкт user та ім'я друга(friend), і додає ім'я друга(friend) у масив friends. Функція повинна повертати масив friends.

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // your code here
    const { friends } = userObj.data;
    friends.push(friend);
    return friends;
}
console.log(addFriend(user, 'Pete'));

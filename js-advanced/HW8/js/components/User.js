class User {
    classNames = {
        userItem: 'users__item',
        user: 'user',
        userWrapper: 'user__wrapper',
        userImgWrapper: 'user__img',
        userInfo: 'user__info',
        userName: 'user__name',
        userEmail: 'user__email',
    };

    createUserElem(tag, classNames) {
        const elem = document.createElement(tag);
        elem.classList.add(classNames);

        return elem;
    }

    showUsers(users) {
        users.forEach(user => {
            const userGender = user.gender === 'female' ? 'women' : 'men';
            const userStatus = user.status === 'active' ? 'active' : 'inactive';


            const li = document.createElement('li');
            li.classList.add('users__item', 'user', `user--${userStatus}`);
            li.dataset.id = user.id;

            const userWrapper = this.createUserElem('div', this.classNames.userWrapper);
            li.append(userWrapper);

            const userImgWrapper = this.createUserElem('div', this.classNames.userImgWrapper);
            userWrapper.append(userImgWrapper);

            const userImg = document.createElement('img');
            userImg.src = `./img/${userGender}.png`;
            userImg.alt = userGender;
            userImgWrapper.append(userImg);

            const userInfoElem = this.createUserElem('div', this.classNames.userInfo);
            userWrapper.append(userInfoElem);

            const userNameElem = this.createUserElem('p', this.classNames.userName);
            userNameElem.textContent = user.name;
            userInfoElem.append(userNameElem);

            const userEmailElem = this.createUserElem('p', this.classNames.userEmail);
            userEmailElem.textContent = user.email;
            userInfoElem.append(userEmailElem);

            usersListElem.append(li);

        });
    }

    getUsers(page) {
        return userApi.getUsers(page)
            .then(result => {
                this.showUsers(result);
            })
            .catch(err => console.log(err));
    }
}


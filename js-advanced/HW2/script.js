//     Продукт з прикладу
//     {
//         "id": 333692440,
//         "href": "https://rozetka.com.ua/ua/persil-9000101536591/p333692440/",
//         "title": "Капсули для прання Persil Power Caps Колір Doy 70 шт. (9000101536591)",
//         "images": [
//             {
//                 "preview": "https://content2.rozetka.com.ua/goods/images/preview/250024064.jpg"
//             }
//         ],
//         "price": {
//             "old": 1096,
//             "current": 549,
//         },
//         "badge": "new"
//     }

//  1. Створити функцію, яка виведе всі товари з масиву goods в .product-list з дотриманням відповідної верстки
//  2. Реалізувати фільтрацію товарів при зміні select(.js-goods-filter). 
//     Вивести відфільтрованний список замість поточного. Використайте type event - change
//  3. Реалувати пошук товарів через інпут .js-goods-search. 
//     Вивести список знайденних товарів замість поточного.  Використайте type event - input
//  4. Реалувати сортування товарів через інпути .js-goods-sort. 
//     Вивести відсортований список замість поточного.  Використайте type event - change

// * ВАЖЛИВО! Всі обчислення починати від масива goods. Не потрібно реалізовувати наприклад сортування відфільтрованного списку і т.п. 


const goods = [
    {
        "id": 14606570,
        "href": "https://hard.rozetka.com.ua/ua/kingston_sa400s37_240g/p14606570/",
        "title": "Kingston SSDNow A400 240GB 2.5\" SATAIII 3D TLC (SA400S37/240G)",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/10957834.jpg"
            }
        ],
        "price": {
            "old": 806,
            "current": 549,
        },
        "badge": "new"
    },
    {
        "id": 280807508,
        "href": "https://rozetka.com.ua/ua/persil_9000101428230/p280807508/",
        "title": "Пральний порошок Persil автомат Колор 8.1 кг (9000101428230)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/242978958.jpg"
            }
        ],
        "price": {
            "old": 896,
            "current": 509,
        },
        "badge": "sale"
    },
    {
        "id": 258053376,
        "href": "https://rozetka.com.ua/ua/jacobs_8714599108932/p258053376/",
        "title": "Кава розчинна Jacobs Monarch 500 г (8714599108932)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/151054150.jpg"
            }
        ],
        "price": {
            "old": 496,
            "current": 249,
        },
        "badge": "sale"
    },
    {
        "id": 14606558,
        "href": "https://hard.rozetka.com.ua/ua/kingston_sa400s37_480g/p14606558/",
        "title": "Kingston SSDNow A400 480GB 2.5\" SATAIII 3D V-NAND (SA400S37/480G)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/172239507.jpg"
            }
        ],
        "price": {
            "old": 1296,
            "current": 559,
        },
        "badge": "new"
    },
    {
        "id": 114194984,
        "href": "https://rozetka.com.ua/ua/finish_5997321736280/p114194984/",
        "title": "Таблетки для посудомийних машин FINISH All in 1 Max 94 шт. (5997321736280)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/191113870.jpg"
            }
        ],
        "price": {
            "old": 696,
            "current": 349,
        },
        "badge": "new"
    },
    {
        "id": 224265469,
        "href": "https://rozetka.com.ua/ua/catsan_4008429130403/p224265469/",
        "title": "Наповнювач для котячого туалету Catsan Hygiene plus Мінеральний вбирний 4.9 кг (10 л) (4008429130403)",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/26038622.jpg"
            }
        ],
        "price": {
            "old": 1696,
            "current": 1249,
        },
        "badge": "sale"
    },
    {
        "id": 5873133,
        "href": "https://rozetka.com.ua/ua/frosch_4009175191908/p5873133/",
        "title": "Таблетки для миття посуду в посудомийних машинах Frosch Сода 30 шт (4009175191908)",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/10693594.jpg"
            }
        ],
        "price": {
            "old": 1495,
            "current": 1289,
        },
        "badge": "new"
    },
    {
        "id": 4918269,
        "href": "https://rozetka.com.ua/ua/bells_5000387905474_5000387905634/p4918269/",
        "title": "Віскі Bell's Original 0.7 л 40% (5000387905474_5000387905634)",
        "images": [
            {
                "preview": "https://content1.rozetka.com.ua/goods/images/preview/48122198.jpg"
            }
        ],
        "price": {
            "old": 498,
            "current": 299
        },
        "badge": "sale"
    },
    {
        "id": 23488125,
        "href": "https://rozetka.com.ua/ua/ambassador_7612654000034/p23488125/",
        "title": "Кава в зернах Ambassador Blue Label 1 кг (7612654000034)",
        "images": [
            {
                "preview": "https://content2.rozetka.com.ua/goods/images/preview/11251220.jpg"
            }
        ],
        "price": {
            "old": 633,
            "current": 359
        },
        "badge": "sale"
    },
    {
        "id": 24852941,
        "href": "https://bt.rozetka.com.ua/ua/philips_mg5730_15/p24852941/",
        "title": "Тример універсальний PHILIPS Series 5000 MG5730/15",
        "images": [
            {
                "preview": "https://content.rozetka.com.ua/goods/images/preview/11314684.jpg"
            }
        ],
        "price": {
            "old": 2599,
            "current": 1999
        },
        "badge": "new"
    }
];

const productListElem = document.querySelector('.product-list');
const productSelect = document.querySelector('.js-goods-filter');
const searchItemsElem = document.querySelector('.js-goods-search');
const productSortBtns = document.querySelectorAll('.js-goods-sort');
let searchSymbol = '';

const createCard = card => {
    const article = document.createElement('article');
    const articleLink = document.createElement('a');
    const articleBadge = document.createElement('span');
    const articleImageWrapper = document.createElement('span');
    const articleImg = document.createElement('img');
    const articleTitle = document.createElement('span');
    const articleInfo = document.createElement('span');
    const articlePrice = document.createElement('span');
    const articleOldPrice = document.createElement('span');
    const articleNewPrice = document.createElement('span');
    const articleButton = document.createElement('button');

    article.classList.add('product-list__item', 'tile');
    article.setAttribute('data-id', card.id);

    articleLink.classList.add('tile__link');
    articleLink.href = card.href;

    articleBadge.classList.add('tile__badge', `${card.badge === 'new' ? 'tile__badge--new' : 'tile__badge--sale'}`);
    articleBadge.textContent = card.badge;

    articleImageWrapper.classList.add('tile__image');

    articleImg.src = card.images[0].preview;
    articleImg.alt = card.title;

    articleTitle.classList.add('tile__title');
    articleTitle.textContent = card.title;

    articleInfo.classList.add('tile__info');

    articlePrice.classList.add('tile__price');

    articleOldPrice.classList.add('tile__old-price');
    articleOldPrice.textContent = card.price.old + ' ₴';

    articleNewPrice.classList.add('tile__new-price');
    articleNewPrice.textContent = card.price.current + ' ₴';

    articleButton.classList.add('btn');
    articleButton.textContent = 'Купити';

    articlePrice.append(articleOldPrice);
    articlePrice.append(articleNewPrice);

    articleImageWrapper.append(articleImg);

    articleInfo.append(articlePrice);
    articleInfo.append(articleButton);

    articleLink.append(articleBadge);
    articleLink.append(articleImageWrapper);
    articleLink.append(articleTitle);
    articleLink.append(articleInfo);

    article.append(articleLink);

    return article;

};

const showCards = (items, parentElem) => {
    parentElem.innerHTML = '';
    items.forEach(item => {
        parentElem.append(createCard(item));
    });
};

const filterCards = (items, value) => {
    let filteredItems = [];

    if (value === 'all') {
        filteredItems = items;
    }

    if (value === 'new' || value === 'sale') {
        filteredItems = items.filter(item => item.badge === value);
    }

    if (value === 'low-price') {
        filteredItems = items.filter(item => item.price.current < 1000);
    } else if (value === 'high-price') {
        filteredItems = items.filter(item => item.price.current > 1000);
    }

    if (value === searchSymbol) {
        filteredItems = items.filter(item => item.title.toLowerCase().includes(searchSymbol));
    }

    return filteredItems;
};

const sortCards = (items, value) => {
    let sortedItems = [];

    if (value === 'price') {
        sortedItems = items.sort((a, b) => a.price.current - b.price.current);
    }

    if (value === 'alphabet') {
        sortedItems = items.sort((a, b) => {
            const nameA = a.title.toLowerCase();
            const nameB = b.title.toLowerCase();

            return nameA < nameB ? -1 : 1;
        });
    }

    return sortedItems;
};

// show all goods
showCards(goods, productListElem);

// show filtered goods
productSelect.addEventListener('change', event => {
    const selectValue = event.target.value;
    const filteredGoods = filterCards(goods, selectValue);
    showCards(filteredGoods, productListElem);
});

// search items TODO: process spaces case
searchItemsElem.addEventListener('input', event => {
    searchSymbol = event.target.value.toLowerCase();

    // if (searchSymbol === ' ') {
    //     searchSymbol = '';
    // }

    const filteredGoods = filterCards(goods, searchSymbol);
    showCards(filteredGoods, productListElem);
});

// sort items
productSortBtns.forEach(btn => {
    btn.addEventListener('change', event => {
        const radioBtnValue = event.target.value;
        const sortedGoods = sortCards(goods, radioBtnValue);

        showCards(sortedGoods, productListElem);
    });
});

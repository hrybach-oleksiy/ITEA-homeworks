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

const createCard = item => {
    return `
    <article class="product-list__item tile" data-id="${item.id}">
        <a href="${item.href}" class="tile__link">
            <span class="tile__badge tile__badge--new">${item.badge}</span>
            <span class="tile__image">
                <img src="${item.images[0].preview}" alt="${item.title}">
            </span>
            <span class="tile__title">${item.title}</span>
            <span class="tile__info">
                <span class="tile__price">
                    <span class="tile__old-price">${item.price.old} ₴</span>
                    <span class="tile__new-price">${item.price.current} ₴</span>
                </span>
                <button class="btn">Купити</button>
            </span>
        </a>
    </article>
    `;
};

goods.forEach(good => {
    productListElem.insertAdjacentHTML('beforeend', createCard(good));
});
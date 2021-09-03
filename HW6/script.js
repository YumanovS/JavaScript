// создаем объект каталога
function Item(product, image, description, price, discount=0) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let catalogList = []

catalogList.push(new Item('Выдвижной контейнер', 'image1',"Description1", 599,5));
catalogList.push(new Item('Многофункциональный контейнер', 'image2',"Description2", 149));
catalogList.push(new Item('Штанга для полотенца', 'image3', "Description3",799));
catalogList.push(new Item('Выдвижные мусорные баки', 'image4', "Description4",3198,5));
catalogList.push(new Item('Вставка в полку', 'image5', "Description5",499));
catalogList.push(new Item('Магнитная планка', 'image6',"Description6", 1299));
catalogList.push(new Item('Тележка', 'image7',"Description7", 3999,10));
catalogList.push(new Item('Кашпо', 'image8', "Description8",749));

function createItems() {
    catalogList.forEach(function (item, i) {
        createItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function createItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend', 
    `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="image"><img src="${item.image}"></div>
            <div class="description"><h4>${item.product}</h4>${item.description}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}

createItems(catalogList);


let shoppingBasket = [];

let emptyBasket = 'В корзине пока нет товаров';

function basketItem(product, price, discount=0) {
    this.product = product;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function() {
        if (this.discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price;
        }
    }
}

function totalAmount(shoppingBasket) {
    return shoppingBasket.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}

function createTotal (shoppingBasket) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingBasket == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p>В корзине: ${shoppingBasket.length} 
            товар(ов) на сумму ${totalAmount(shoppingBasket)} рублей.</p>
            <a class="buy" href="order.html">Купить</a>
        </div>`);
    }
}
createTotal(shoppingBasket);


$catalog.addEventListener('click', function (a) {
    if (a.target.className ==='button' ) {
        const id = Number(a.target.getAttribute('data-id'));
        const choice = catalogList[id];
        shoppingBasket.push(new basketItem(choice.product, choice.price, choice.discount));

        createTotal(shoppingBasket);
    } 
});
 
const $popup = document.querySelector('#popup');

$popup.addEventListener('click', function(a) {
    $popup.style.display = 'none';
});

 $catalog.addEventListener('click', function(a) {
    if( a.target.tagName === 'IMG' ) {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${a.target.getAttribute('src')}" class="scale">`);
    }
});
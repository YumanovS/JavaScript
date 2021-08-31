const main = document.querySelector('#main');

let order = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

function addItem(product, image, price, quantity) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.price = price;
    this.quantity = quantity
}

order.push(
    new addItem('Выдвижной контейнер', 'image1', 599, 2)
);
order.push(
    new addItem('Многофункциональный контейнер', 'image2', 149, 3)
);
order.push(
    new addItem('Штанга для полотенца', 'image3', 799, 2)
);
order.push(
    new addItem('Выдвижные мусорные баки', 'image4', 3198, 1)
);
order.push(
    new addItem('Вставка в полку', 'image5', 499, 3)
);
order.push(
    new addItem('Магнитная планка', 'image6', 1299, 2)
);
order.push(
    new addItem('Тележка', 'image7', 3999, 1)
);
order.push(
    new addItem('Кашпо', 'image8', 749, 4)
);


if (order == 0) {
	main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
	for (const i of order) {
        main.insertAdjacentHTML('beforeend', 
        `<div class="prod_item">
        <span>Товар - ${i.product}</span> 
        <span>Цена - ${i.price} руб</span>
        <span>Количество - ${i.quantity}</span>
        <span><img src="${i.image}"></span>
        </div>`);
    }
}

function totalQuantity(order) {
	return order.reduce( function (acc, order){
        return acc + order.quantity
    }, 0)
};

function totalAmount(order) {
    return order.reduce( function (acc, order){
        return acc + (order.price * order.quantity)
    }, 0)
};

if (order != 0) {
    const totalPrice = main.insertAdjacentHTML('beforeend', 
    `<hr><div class="prod_item total">В корзине: ${totalQuantity(order)} товаров на сумму 
    ${totalAmount(order)} рублей</div>`);
}
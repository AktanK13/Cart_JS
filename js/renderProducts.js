const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('./data/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


function renderProducts(productsArray) {
    productsArray.map(function (item) {
        const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="img/iphones/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__currency">${numberWithSpaces(item.price)}сом</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									Добавить в корзину
								</button>

							</div>
						</div>
					</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}
async function showFoods() {
    const data = await fetchData(urlFoods);

    const foods = document.querySelector(".foods");

    data.forEach(element => {
        foods.innerHTML += `
        <div class="col">
        <div class="card p-2">
                                <div class="card_header">
                                    <span>${element.id}</span>
                                    <h4>${element.nameFood}</h4>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                                <img src="${element.img}" class="card-img-top w-50 mx-auto" alt="...">
                                <h5 class="text-center text-danger">$${element.price}</h5>
                                <div class="card-body">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <input type="text" value="0" class="quantity">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>
                                </div>`
    });

}

showFoods();
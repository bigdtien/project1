async function showFoods() {
    const data = await fetchData(urlFoods);

    const foods = document.querySelector(".foods");

    data.forEach(element => {
        foods.innerHTML += `
        <div class="card">
                                    <span>1</span>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2251/2251855.png"
                                        class="card-img-top w-50 mx-auto" alt="...">
                                    <div class="card-body">

                                    </div>
                                </div>`
    });

}

showFoods();
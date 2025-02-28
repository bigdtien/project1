let dataFoods;
async function showFoods(search) {
    const data = await fetchData(urlFoods);
    dataFoods = data;
   let dataFilter;
   if(search) {
    dataFilter = data.filter(e => e.nameFood.toLowerCase().includes(search.toLowerCase()));
   }else {
     dataFilter = data;
   }
    const foods = document.querySelector(".foods");
    foods.innerHTML = "" ;
    dataFilter.forEach((element,index) => {
        const item = document.createElement("div");
        item.classList.add("col")
        item.innerHTML += `
        <div class="card p-2">
                                <div class="card_header">
                                    <span>${index + 1}</span>
                                    <h4>${element.nameFood}</h4>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                                <img src="${element.img}" style="height: 150px" class="card-img-top w-50  mx-auto" alt="...">
                                <h5 class="text-center text-danger">$${element.price}</h5>
                                <div class="card-body">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <input type="text" value="0" class="quantity">
                                    <i class="fa-solid fa-circle-plus"></i>
                                </div>
                            </div>`
        const minus = item.querySelector(".fa-circle-minus");
        const plus = item.querySelector(".fa-circle-plus");
        const quantity = item.querySelector(".quantity")
        plus.addEventListener("click", () => {
            quantity.value = parseInt(quantity.value) + 1 ;
        })
        minus.addEventListener("click", () => {
            if(quantity.value > 0) {
                quantity.value = parseInt(quantity.value) - 1 ;
            }
        })
        foods.appendChild(item);
    });

}

showFoods();

//function hien img tren modul
const img = document.getElementById("formFile");
console.log(img);
let fileFood ;
img.addEventListener("change", (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
     fileFood = file;
    reader.readAsDataURL(file) ;
    reader.onloadend =  function (){
        document.getElementById("showImgFood").src = reader.result;
    }
})

const submit_food = document.getElementById("submit-food");
submit_food.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("nameFood").value;
    const price = document.getElementById("price").value;
    const img = await uploadToCloudinary(fileFood);
   let id = 1;
  dataFoods.sort((a,b) => a.id - b.id).forEach(e => {
      if(id == e.id) {
          id++;
      }
  })
    const newFood = {
        id : id,
        nameFood: name,
        price: price,
        img: img
      }
      add(urlFoods,newFood);
});

const search  = document.querySelector(".search input");

search.addEventListener("change", () => {
    showFoods(search.value);
} )
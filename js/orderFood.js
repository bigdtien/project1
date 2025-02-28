let dataOrders;
async function getOrders() {
    const data = await fetchData(urlOrders);
    dataOrders = data;
}
getOrders();
const order = document.querySelector(".table_order button");

order.addEventListener("click", () => {

    const table_order = document.getElementById("select_table").value;
    
    const bill = dataOrders.find(e => e.id == table_order);

    const listFood = document.querySelectorAll(".foods .col");
    
   const newBill =  bill ? bill.bill : [];
    listFood.forEach((element) => {
        const quantity = parseInt(element.querySelector(".quantity").value) ;
        if(quantity > 0) {
           const idFood = element.querySelector(".card_header span").innerText ;
           const index = newBill.findIndex(e => e.idFood == idFood);
            if(index != -1) {
               newBill[index].quantity += quantity ;
            }else {
                newBill.push({idFood,quantity});
            }
            
        }
    });

    const newOrder = {
        id : table_order,
        bill : newBill
    }
    if(bill) {
        edit(urlOrders,newOrder);   
    }else {
        add(urlOrders,newOrder);   
    }
}    
);

function showCart(id){
    const tableCart = dataOrders.find(e => e.id == id ) ;

    const tableBill = document.getElementById("cartFood");
    tableBill.innerHTML = "";
    tableCart.bill.forEach((item,index )=> {
        const food = dataFoods.find(e => e.id == item.idFood);
        
        tableBill.innerHTML += `<tr>
                                        <th scope="row">${index + 1}</th>
                                        <td>
                                        <img style="width: 30px;" src=${food.img} alt="">
                                        </td>
                                        <td>${food.nameFood}</td>
                                        <td>${item.quantity}</td>
                                        <td>$${food.price}</td>
                                    </tr>`
    } )
    
}




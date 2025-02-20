
async function showTables() {
    const data = await fetchData(urlTables);

    const tables = document.querySelector(".tables");

    data.forEach((element, index) => {
        const status = element.status ? `<button type="button" class="btn btn-success">
                                            <i class="fa-solid fa-plus"></i>
                                            ADD
                                        </button>  <button type="button" class="btn btn-danger">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            CART
                                        </button>` : `<button onClick=getId(${element.id}) type="button" class="btn btn-warning " data-bs-toggle="modal" data-bs-target="#booking">
                                            <i class="fa-solid fa-table"></i>
                                            Booking
                                        </button>`

        tables.innerHTML += `                            <div class="col">
                                <div class="card" >
                                    <span>${element.id}</span>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2251/2251855.png" class="card-img-top w-50 mx-auto" alt="...">
                                    <div class="card-body">
                                       ${status}
                                    </div>
                                </div>    
                            </div>`
    });
}

showTables();
let idTable;

function getId(id) {
    idTable = id;
}

const form_booking = document.getElementById("form_booking")

form_booking.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
        console.log("validate Error");
        return;
    }
    const customer_name = document.getElementById("customerName").value;
    const quantity = document.getElementById("quantity").value;

    const booking_table = {
        id: idTable,
        nameCustomer: customer_name,
        status: true,
        quantity: quantity
    }
    edit(urlTables, booking_table)
}
)

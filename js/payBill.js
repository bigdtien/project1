async function tableBill() {
    const data = await fetchData(urlTables);

    const tables = document.querySelector(".tables");

    const select = document.getElementById("select_table2");

    data.array.forEach(element => {
        if (element.status) {
            select.innerHTML += `<option value="${element.id}">Table ${element.id}</option>`
        }
    });
}

tableBill();
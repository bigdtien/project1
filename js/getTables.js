
async function showTables () {
       const data = await fetchData(urlTables);
       console.log(data);
       
}

showTables ();
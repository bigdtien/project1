const urlTables = "http://localhost:3000/tables";
const urlFoods = "http://localhost:3000/foods";
const urlOrders = "http://localhost:3000/orders";

async function fetchData(url) {
  try {
    const response = await fetch(url);  // Gửi yêu cầu GET đến URL
    if (!response.ok) {  // Kiểm tra nếu phản hồi không thành công
      throw new Error('Network response was not ok');
    }
    const data = await response.json();  // Chuyển đổi phản hồi thành JSON
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);  // Xử lý lỗi
  }
}





async function edit(url, order) {
  try {
    const response = await fetch(`${url}/${order.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('Đơn hàng đã được cập nhật', data);
  } catch (error) {
    console.error('Lỗi khi cập nhật đơn hàng:', error);
  }
}

function deleted(url,id) {
  fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {      
    })
    .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}

function add(url,object) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => console.error('Error creating post:', error));
}
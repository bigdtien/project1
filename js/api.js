const urlTables = "http://localhost:3000/tables";

async function fetchData(url) {
    try {
      const response = await fetch(url);  // Gửi yêu cầu GET đến URL
      if (!response.ok) {  // Kiểm tra nếu phản hồi không thành công
        throw new Error('Network response was not ok');
      }
      const data = await response.json();  // Chuyển đổi phản hồi thành JSON
       return data ;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);  // Xử lý lỗi
    }
  }
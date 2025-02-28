// Hàm upload ảnh lên Cloudinary
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Project1"); // Thay bằng Upload Preset của bạn

    try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dmnrqmyy3/image/upload", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        return data.secure_url; // Lưu URL ảnh đã upload
    } catch (error) {
        console.error("Lỗi upload ảnh:", error);
    }
}
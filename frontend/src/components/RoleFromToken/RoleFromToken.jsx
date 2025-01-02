import { jwtDecode } from 'jwt-decode';

// Hàm lấy các roles từ token
function getRolesFromToken(token) {
    try {
        const decoded = jwtDecode(token); // Giải mã token
        if (decoded && decoded.roles) {
            // Tách chuỗi roles thành mảng và trả về
            return decoded.roles.split(" "); // Trả về mảng các roles
        }
        return []; // Nếu không có roles, trả về mảng rỗng
    } catch (error) {
        console.error("Token is invalid or decoding failed", error);
        return []; // Nếu có lỗi khi giải mã, trả về mảng rỗng
    }
}

// Hàm kiểm tra xem người dùng có vai trò nhất định không
function hasRole(token, role) {
    const roles = getRolesFromToken(token); // Lấy các roles từ token
    return roles.includes(role); // Kiểm tra xem role có trong mảng roles không
}

// Hàm trả về vai trò của người dùng (ADMIN nếu có ADMIN role, USER nếu không)
function Role(token) {
    if (hasRole(token, "ADMIN")) {
        return "ADMIN"; // Trả về ADMIN nếu có role ADMIN
    }
    return "USER"; // Trả về USER nếu không có role ADMIN
}

export default Role;

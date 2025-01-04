import './signInForm.scss';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState } from 'react'; // Import useState
import axios from 'axios'; // Import axios để gửi yêu cầu HTTP
import Role from '../RoleFromToken/RoleFromToken';

function LoginForm() {
    const navigate = useNavigate(); // Khởi tạo useNavigate
    const [email, setEmail] = useState(''); // State lưu email
    const [password, setPassword] = useState(''); // State lưu mật khẩu
    const [errorMessage, setErrorMessage] = useState(''); // State lưu thông báo lỗi

    const handleSubmit = async (event) => {
        event.preventDefault(); // Ngừng reload trang khi gửi form

        try {
            // Gửi yêu cầu đăng nhập đến server
            const response = await axios.post('http://localhost:8080/global/auth/login', {
                email,
                password,
            });

            console.log(response);

            // Xử lý thành công, ví dụ chuyển hướng người dùng sau khi đăng nhập thành công
            if (response.data.result.authenticated) {
                const token = response.data.result.token;
                alert("đăng nhập thành công!");
                const role = Role(token);
                window.localStorage.setItem("token", token);
                window.localStorage.setItem("role", role);
                window.localStorage.setItem("LoggedIn", true);

                console.log("đây là role: ", role);
                if (role === "ADMIN") {
                    navigate("/productpage");
                }
                else {
                    navigate("/");
                }
            }
        } catch (error) {
            // Xử lý lỗi, ví dụ thông báo lỗi nếu đăng nhập không thành công
            setErrorMessage('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        }
    };

    return (
        <div className="signin-login-form">
            <h2>ĐĂNG NHẬP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email*:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị email khi người dùng nhập
                />

                <label htmlFor="password">Mật khẩu*:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị mật khẩu khi người dùng nhập
                />

                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Hiển thị thông báo lỗi nếu có */}

                <div className="forgot-password">
                    <span
                        onClick={() => navigate('/forgotpassword')} // Use navigate to go to "forgotpassword"
                        style={{ cursor: 'pointer', color: '#4a4a4a', fontWeight: 'bold' }}
                    >
                        Quên mật khẩu?
                    </span>
                </div>

                <button type="submit">Đăng nhập</button>

                <div className="sign-up">
                    <p>
                        Chưa có tài khoản?{' '}
                        <span
                            onClick={() => navigate('/signup')} // Thêm sự kiện onClick để điều hướng
                            style={{ cursor: 'pointer', color: '#4a4a4a', fontWeight: 'bold' }}
                        >
                            Đăng ký
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

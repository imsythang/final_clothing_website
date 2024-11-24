import './signInForm.scss';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginForm() {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  return (
    <div className="login-form">
      <h2>ĐĂNG NHẬP</h2>
      <form>
        <label htmlFor="email">Email*:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Mật khẩu*:</label>
        <input type="password" id="password" name="password" required />

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

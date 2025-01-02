import React, { useState } from 'react'; // Import React và useState
import axios from 'axios'; // Import axios
import './signUpForm.scss'; // Import file SCSS
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  // Khai báo state cho các trường nhập liệu
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý khi form được submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn trình duyệt reload khi submit form

    // Dữ liệu để gửi lên server
    const userData = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phoneNumber,
      city,
      district,
      street,
      email,
      password
    };

    try {
      // Gửi yêu cầu POST đến server bằng axios
      const response = await axios.post('http://localhost:8080/global/auth/sign', userData, {
        headers: {
          'Content-Type': 'application/json', // Header định dạng JSON
        },
      });

      // Kiểm tra kết quả trả về từ server
      if (response.status === 200) {
        alert('Đăng kí thành công!');
        navigate("/signin");
        console.log('Response:', response.data);
      } else {
        alert('Lỗi khi đăng kí: ' + response.data.message);
        console.error('Error:', response.data);
      }
    } catch (error) {
      // Xử lý lỗi nếu yêu cầu thất bại
      console.log(error);
      const message = error.response.data.message;
      alert(`${message}`);
      console.error('Error:', error.response || error.message);
    }
  };

  return (
    <div className="sign-up-form">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-value' >
          <div className='input-value-item'>
            <label htmlFor="firstName">First Name*:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} // Cập nhật state khi người dùng nhập
              required
            />
          </div>

          <div className='input-value-item'>
            <label htmlFor="lastName">Last Name*:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // Cập nhật state khi người dùng nhập
              required
            />
          </div>

        </div>

        <label htmlFor="dateOfBirth">Date of Birth*:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)} // Cập nhật state khi người dùng nhập
          required
        />

        <label>Gender*:</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="man"
              checked={gender === 'man'}
              onChange={(e) => setGender(e.target.value)} // Cập nhật state khi chọn giới tính
              required
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={gender === 'woman'}
              onChange={(e) => setGender(e.target.value)} // Cập nhật state khi chọn giới tính
              required
            />{' '}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === 'other'}
              onChange={(e) => setGender(e.target.value)} // Cập nhật state khi chọn giới tính
              required
            />{' '}
            Unselect
          </label>
        </div>

        <div className="input-value">
          <div className="input-value-item">
            <label htmlFor="phoneNumber">Phone Number*:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)} // Cập nhật state khi người dùng nhập
              required
            />

          </div>
          <div className="input-value-item">
            <label htmlFor="city">City*:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)} // Cập nhật state khi người dùng nhập
              required
            />

          </div>
        </div>

        <div className="input-value">
          <div className="input-value-item">
            <label htmlFor="district">District*:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)} // Cập nhật state khi người dùng nhập
              required
            />

          </div>
          <div className="input-value-item">
            <label htmlFor="street">Street*:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)} // Cập nhật state khi người dùng nhập
              required
            />

          </div>
        </div>



        <label htmlFor="email">Email*:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Cập nhật state khi người dùng nhập
          required
        />

        <label htmlFor="password">Password*:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Cập nhật state khi người dùng nhập
          required
        />

        <button type="submit">SIGN UP</button>

        <div className="sign-up" style={{ paddingTop: "15px" }}>
          <p>
            Đã có tài khoản?{' '}
            <span
              onClick={() => navigate('/signin')} // Thêm sự kiện onClick để điều hướng
              style={{ cursor: 'pointer', color: '#4a4a4a', fontWeight: 'bold' }}
            >
              Đăng nhập
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

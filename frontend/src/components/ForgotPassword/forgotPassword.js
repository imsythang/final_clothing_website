import './forgotPassword.scss';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ForgotPassword() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset (e.g., API call)
    alert('A password reset link has been sent to your email.');
    navigate('/signin'); // Redirect to SignIn page after submission
  };

  return (
    <div className="forgot-password-form">
      <h2>RESET YOUR PASSWORD</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email*:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default ForgotPassword;

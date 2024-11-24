// SignUpForm.js
import './signUpForm.scss'; // Import file SCSS

function SignUpForm() {
  return (
    <div className="sign-up-form">
      <h2>SIGN UP</h2>
      <form>
        <label htmlFor="name">Name*:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email*:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password*:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="birthday">Birthday*:</label>
        <input type="date" id="birthday" name="birthday" required />

        <label>Gender*:</label>
        <div className="gender-options">
          <label>
            <input type="radio" name="gender" value="male" required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="unselect" required /> Unselect
          </label>
        </div>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUpForm;

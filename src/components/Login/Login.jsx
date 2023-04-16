import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleLogIn}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='' required />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            // type={show ? "text" : "password"}
            type='password'
            name='password'
            id=''
            required
          />
          {/* <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p> */}
        </div>
        <input className='btn-submit' type='submit' value='Login' />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to='/signup'>Create New Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;

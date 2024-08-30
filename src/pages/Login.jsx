import React from 'react';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [currentState, setCurrentState] = React.useState('Login');
  const { theme, navigate } = React.useContext(ShopContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 gap-4"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-lg">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === 'Login' ? (
          ''
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800 text-black"
            placeholder="Full Name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800 text-black"
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800 text-black"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-10px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState('Login')}
            >
              Login here
            </p>
          )}
        </div>
        <button
          className={`${
            theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
          } font-light px-8 py-2 mt-4 rounded`}
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
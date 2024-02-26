import React, { useState } from 'react';
import { validEmail, validPassword } from './login.constants';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async data => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.ok) {
        setMessage('An email has been sent with instructions to reset your password.');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex-center-center bg-auth-bg h-[100vh] relative max-[769px]:px-[15px] overflow-hidden">
      <div className="absolute top-[-300px] right-[-20px] w-[612px] h-[612px] rounded-[612px] blur-[250px] bg-gradient-color"></div>
      <div className="absolute bottom-[-300px] left-[-100px] w-[612px] h-[612px] rounded-[612px] blur-[250px] bg-gradient-color"></div>
      <div className="w-full max-w-[654px] rounded-2xl bg-auth-block py-[81px] px-[124px] max-[769px]:bg-transparent max-[769px]:px-0 max-[769px]:py-0">
        <div className="relative z-10">
          <h2 className="text-white text-center text-[32px] leading-[110%] font-semibold mt-[24px] max-[769px]:text-[36px]">
            Forgot Password
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center mt-[42px] max-[769px]:mt-[72px]">
              <div className="w-full mb-[12px]">
                <input
                  type="text"
                  placeholder="Email"
                  className={`w-full rounded border border-solid border-${
                    errors.email ? 'error-color' : '[#727272]'
                  } py-[15px] px-[10px] bg-transparent
              outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light 
              placeholder:tracking-[0.5px] focus:${errors.email ? 'border-error-color' : 'border-primary-active'} `}
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: {
                      value: validEmail,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <p className="text-[#E73A5F] mt-2">{errors.email.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-[11.5px] rounded bg-btn-active mt-[30px] text-white text-[18px] font-semibold text-center hover:bg-btn-hover transition duration-300"
              >
                Next
              </button>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import { validEmail, validPassword } from './login.constants';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import NoneEyeIcon from '../../components/ui/icons/NoneEyeIcon';
import EyeIcon from '../../components/ui/icons/EyeIcon';

const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async data => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await axios.patch(`${apiUrl}/auth/reset`, {
        email: localStorage.getItem('emailForgot'),
        newPassword: data?.password,
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('emailForgot', '');
        navigate('/');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex-center-center bg-auth-bg h-[100vh] relative max-[769px]:px-[15px] overflow-hidden">
      <div className="absolute top-[-300px] right-[-20px] w-[612px] h-[612px] rounded-[612px] blur-[250px] bg-gradient-color"></div>
      <div className="absolute bottom-[-300px] left-[-100px] w-[612px] h-[612px] rounded-[612px] blur-[250px] bg-gradient-color"></div>
      <div className="w-full max-w-[654px] rounded-2xl bg-auth-block py-[81px] px-[124px] max-[769px]:bg-transparent max-[769px]:px-0 max-[769px]:py-0">
        <div className="relative z-10">
          <h2 className="text-white text-center text-[32px] leading-[110%] font-semibold mt-[24px] max-[769px]:text-[36px]">
            Enter new password
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center mt-[42px] max-[769px]:mt-[72px]">
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={`w-full rounded border border-solid border-${
                    errors.password ? 'error-color' : '[#727272]'
                  } py-[15px] px-[10px] bg-transparent
              outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light 
              placeholder:tracking-[0.5px] focus:${errors.password ? 'border-error-color' : 'border-primary-active'} `}
                  {...register('password', {
                    required: 'Password is required.',
                    pattern: {
                      value: validPassword,
                      message: 'Password must contain Latin letters, numbers, and one of the symbols @$!%*#?&',
                    },
                  })}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                >
                  {showPassword ? <NoneEyeIcon error={errors.password} /> : <EyeIcon error={errors.password} />}
                </span>
              </div>
              {errors.password && <p className="text-[#E73A5F] mt-2 mr-auto">{errors.password.message}</p>}
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

export default ResetPassword;

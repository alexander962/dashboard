import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EyeIcon from '../../components/ui/icons/EyeIcon';
import NoneEyeIcon from '../../components/ui/icons/NoneEyeIcon';
import { validEmail, validPassword } from './login.constants';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthServices from '../../services/AuthServices';

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const { login, setUserData } = useAuth();

  const password = watch('password', '');

  const onSubmit = async data => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await AuthServices.register(data?.name, data?.email, data?.password, data?.country);

      if (response.status === 200 || response.status === 201) {
        const { userId, accessToken, refreshToken } = response.data;
        const userResponse = await axios.get(`${apiUrl}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const userData = userResponse.data;
        setUserData(userData);
        login(accessToken, userData, refreshToken);
        navigate('/');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration', error);
      if (error.response && error.response.status === 400) {
        toast.error(
          error?.response?.data?.message[0] ? error?.response?.data?.message[0] : error?.response?.data?.message
        );
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  return (
    <div className="flex-center-center bg-auth-bg h-[100vh] relative max-[769px]:px-[15px] overflow-hidden">
      <div className="absolute top-[-300px] right-[-20px] w-[612px] h-[612px] rounded-[612px] blur-[250px] bg-gradient-color"></div>
      <div className="absolute bottom-[-300px] left-[-100px] w-[612px] h-[612px] rounded-[612px] blur-[250px] bg-gradient-color"></div>
      <div className="w-full max-w-[654px] rounded-2xl bg-auth-block py-[81px] px-[124px] max-[769px]:bg-transparent max-[769px]:px-0 max-[769px]:py-0">
        <div className="relative z-10">
          <h2 className="text-white text-center text-[32px] leading-[110%] font-semibold mt-[24px] max-[769px]:text-[36px]">
            Create you account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center mt-[42px] max-[769px]:mt-[72px]">
              <div className="w-full mb-[12px]">
                <input
                  type="text"
                  placeholder="Full name"
                  className={`w-full rounded border border-solid border-${
                    errors.name ? 'error-color' : '[#727272]'
                  } py-[15px] px-[10px] bg-transparent
              outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light 
              placeholder:tracking-[0.5px] focus:${errors.name ? 'border-error-color' : 'border-primary-active'} `}
                  {...register('name', {
                    required: 'Name is required.',
                    minLength: {
                      value: 3,
                      message: 'Name must be at least 3 characters long.',
                    },
                  })}
                />
                {errors.name && <p className="text-[#E73A5F] mt-2">{errors.name.message}</p>}
              </div>
              <div className="w-full mb-[12px]">
                <input
                  type="text"
                  placeholder="Country"
                  className={`w-full rounded border border-solid border-${
                    errors.country ? 'error-color' : '[#727272]'
                  } py-[15px] px-[10px] bg-transparent
  outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light 
  placeholder:tracking-[0.5px] focus:${errors.country ? 'border-error-color' : 'border-primary-active'} `}
                  {...register('country', {
                    required: 'Country is required.',
                    pattern: {
                      value: /^[a-zA-Z]{2,}$/,
                      message: 'Country must be at least 2 characters long and contain only English letters.',
                    },
                  })}
                />
                {errors.country && <p className="text-[#E73A5F] mt-2">{errors.country.message}</p>}
              </div>
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
              <div className="relative w-full mb-[12px]">
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
              {errors.password && <p className="text-[#E73A5F] mb-[12px] mr-auto">{errors.password.message}</p>}
              <div className="relative w-full mb-[12px]">
                <input
                  type={showPasswordConfirm ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className={`w-full rounded border border-solid border-${
                    errors.confirmPassword ? 'error-color' : '[#727272]'
                  } py-[15px] px-[10px] bg-transparent
              outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light 
              placeholder:tracking-[0.5px] focus:${
                errors.confirmPassword ? 'border-error-color' : 'border-primary-active'
              } `}
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required.',
                    validate: value => value === password || 'Passwords do not match',
                  })}
                />
                <span
                  onClick={togglePasswordConfirmVisibility}
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                >
                  {showPasswordConfirm ? (
                    <NoneEyeIcon error={errors.confirmPassword} />
                  ) : (
                    <EyeIcon error={errors.confirmPassword} />
                  )}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="text-[#E73A5F] mb-[12px] mr-auto">{errors.confirmPassword.message}</p>
              )}
              <button
                type="submit"
                className="w-full py-[11.5px] rounded bg-btn-active mt-[30px] text-white text-[18px] font-semibold text-center hover:bg-btn-hover transition duration-300"
              >
                Create
              </button>
              <p className="text-white text-center text-[14px] leading-[20px] tracking-[0.25px] font-light mt-[24px]">
                Already have an account?{' '}
                <Link to="/authorization" className="underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

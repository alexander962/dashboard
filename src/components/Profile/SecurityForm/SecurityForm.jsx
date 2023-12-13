import React, { useState } from 'react';
import { validPassword } from '../../../pages/auth/login.constants';
import NoneEyeIcon from '../../ui/icons/NoneEyeIcon';
import EyeIcon from '../../ui/icons/EyeIcon';

const SecurityForm = ({ errors, register, watch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const password = watch('password', '');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordNewVisibility = () => {
    setShowPasswordNew(!showPasswordNew);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  return (
    <>
      <div className="relative w-full mb-[16px]">
        <input
          type={showPasswordNew ? 'text' : 'password'}
          placeholder="Previous Password"
          className={`w-full rounded border border-solid border-${
            errors.passwordPrev ? 'error-color' : '[#727272]'
          } py-[15px] px-[10px] bg-transparent
              outline-none text-white text-base font-light tracking-[0.5px] placeholder:text-[#727272] placeholder:text-base placeholder:font-light 
              placeholder:tracking-[0.5px] focus:${
                errors.passwordPrev ? 'border-error-color' : 'border-primary-active'
              } `}
          {...register('passwordPrev', {
            required: 'Password is required.',
            pattern: {
              value: validPassword,
              message: 'Password must contain Latin letters, numbers, and one of the symbols @$!%*#?&',
            },
          })}
        />
        <span
          onClick={togglePasswordNewVisibility}
          className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
        >
          {showPasswordNew ? <NoneEyeIcon error={errors.passwordPrev} /> : <EyeIcon error={errors.passwordPrev} />}
        </span>
      </div>
      {errors.passwordPrev && <p className="text-[#E73A5F] mb-[12px] mr-auto">{errors.passwordPrev.message}</p>}
      <div className="relative w-full mb-[16px]">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="New Password"
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
      <div className="relative w-full mb-[24px]">
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
      {errors.confirmPassword && <p className="text-[#E73A5F] mb-[12px] mr-auto">{errors.confirmPassword.message}</p>}
      <button
        type="submit"
        className="w-full rounded bg-btn-active py-[12px] px-4 text-white text-[16px] font-bold hover:bg-btn-hover
               transition-colors duration-300"
      >
        Save
      </button>
    </>
  );
};

export default SecurityForm;

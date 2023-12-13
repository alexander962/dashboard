import React from 'react';
import { validEmail } from '../../../pages/auth/login.constants';

const ProfileForm = ({ errors, register, name, email }) => {
  return (
    <>
      <div className="w-full mb-[16px]">
        <input
          type="text"
          placeholder="Full name"
          defaultValue={name}
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
      <div className="w-full mb-[24px]">
        <input
          type="text"
          placeholder="Email"
          defaultValue={email}
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
        className="w-full rounded bg-btn-active py-[12px] px-4 text-white text-[16px] font-bold hover:bg-btn-hover
               transition-colors duration-300"
      >
        Save
      </button>
    </>
  );
};

export default ProfileForm;

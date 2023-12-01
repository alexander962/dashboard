import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
import { useForm } from 'react-hook-form';
import EyeIcon from '../../components/icons/EyeIcon';
import NoneEyeIcon from '../../components/icons/NoneEyeIcon';

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

  const password = watch('password', '');
  // const confirmPassword = watch('confirmPassword', '');

  const onSubmit = data => {
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.authGradientTop}></div>
      <div className={styles.authGradientBottom}></div>
      <div className={styles.authInner}>
        <h2 className={styles.authTitle}>Create you account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.authInnerBlock}>
            <div className="w-full mb-[12px]">
              <input
                type="text"
                placeholder="Full name"
                className={errors.name && styles.authInputError}
                {...register('name', {
                  required: 'Name is required.',
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters long.',
                  },
                })}
              />
              {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
            </div>
            <div className="w-full mb-[12px]">
              <input
                type="text"
                placeholder="Email"
                className={errors.email && styles.authInputError}
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
            </div>
            <div className="relative w-full mb-[12px]">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={errors.password && styles.authInputError}
                {...register('password', {
                  required: 'Password is required.',
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
                    message: 'Password must contain Latin letters, numbers, and one of the symbols @$!%*#?&',
                  },
                })}
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <div className={errors.password && styles.authEye}>
                    <NoneEyeIcon />
                  </div>
                ) : (
                  <div className={errors.password && styles.authEye}>
                    <EyeIcon />
                  </div>
                )}
              </span>
            </div>
            {errors.password && <p className="text-red-500 mb-[12px] mr-auto">{errors.password.message}</p>}
            <div className="relative w-full mb-[12px]">
              <input
                type={showPasswordConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                className={errors.confirmPassword && styles.authInputError}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required.',
                  validate: value => value === password || 'Passwords do not match',
                })}
              />
              <span onClick={togglePasswordConfirmVisibility}>
                {showPasswordConfirm ? (
                  <div className={errors.confirmPassword && styles.authEye}>
                    <NoneEyeIcon />
                  </div>
                ) : (
                  <div className={errors.confirmPassword && styles.authEye}>
                    <EyeIcon />
                  </div>
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 mb-[12px] mr-auto">{errors.confirmPassword.message}</p>
            )}
            <button type="submit" className={styles.authInnerBtn}>
              Create
            </button>
            <p className={styles.authInnerLink}>
              Already have an account?{' '}
              <Link to="/authorization" className="underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

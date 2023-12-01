import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
import { useForm } from 'react-hook-form';
import EyeIcon from '../../components/icons/EyeIcon';
import NoneEyeIcon from '../../components/icons/NoneEyeIcon';

const Auth = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = data => {
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.authGradientTop}></div>
      <div className={styles.authGradientBottom}></div>
      <div className={styles.authInner}>
        <h2 className={styles.authTitle}>Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.authInnerBlock}>
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
            <div className="relative w-full">
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
            {errors.password && <p className="text-red-500 mt-2 mr-auto">{errors.password.message}</p>}
            <button type="submit" className={styles.authInnerBtn}>
              Login
            </button>
            <p className={styles.authInnerLink}>
              <Link to="/registration" className="underline">
                Forgot your password?
              </Link>
            </p>
          </div>
        </form>
      </div>
      <p className={styles.authLink}>
        Don’t have an account?
        <Link to="/registration">
          {' '}
          <span>Sign up</span>
        </Link>
      </p>
    </div>
  );
};

export default Auth;

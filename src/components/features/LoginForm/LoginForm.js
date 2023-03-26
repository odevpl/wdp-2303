import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [inputType, setInputType] = useState('password');

  const handleShowPassword = checked => {
    checked ? setInputType('text') : setInputType('password');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-center my-5'>
          <form className='col-12 col-md-8 col-lg-4'>
            <h3 className='text-center'>Sign in to Bazar</h3>
            <input
              type='email'
              className='form-control my-3'
              placeholder='Email*'
            ></input>
            <input
              type={inputType}
              className='form-control my-3'
              placeholder='Password*'
            ></input>
            <div className='row my-3'>
              <div className='col text-start'>
                <div className='form-check form-switch '>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    role='switch'
                    id='switchShowPassword'
                    onChange={e => handleShowPassword(e.target.checked)}
                  ></input>
                  <label className='form-check-label' htmlFor='switchShowPassword'>
                    Show password
                  </label>
                </div>
              </div>
              <div className='col text-end'>
                <a href='#'>Forgot password?</a>
              </div>
            </div>
            <div className='form-check'>
              <input className='form-check-input' type='checkbox'></input>
              <label className='form-check-label'>Remember me</label>
            </div>
            <div className='row my-4 align-items-center'>
              <div className='col text-start'>
                <Link to='/'>&lt;Back</Link>
              </div>
              <div className='col text-end'>
                <Link to='/'>
                  <Button variant='main' type='submit'>
                    Sign in
                  </Button>
                </Link>
              </div>
            </div>
            <div className='mt-5 text-center'>
              <Link to='/register'>New to Bazar? Create an account&gt;</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

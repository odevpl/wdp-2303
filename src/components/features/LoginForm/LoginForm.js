import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import Button from '../../common/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const LoginForm = () => {
  const [inputType, setInputType] = useState('password');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const handleShowPassword = checked => {
    checked ? setInputType('text') : setInputType('password');
  };
  const handleSubmit = () => {
    history.push('/');
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-center my-5'>
          <form className='col-12 col-md-8 col-lg-4'>
            <h3 className='text-center'>Sign in to Bazar</h3>
            <input
              {...register('username', { required: true, pattern: /^admin$/ })}
              type='username'
              className='form-control my-3'
              placeholder='Username*'
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
            <input
              {...register('password', { required: true, pattern: /^pass$/ })}
              type={inputType}
              className='form-control my-3'
              placeholder='Password*'
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
            {errors.username && <p className='text-danger'>Incorrect username!</p>}
            {!errors.username && errors.password && (
              <p className='text-danger'>Incorrect password!</p>
            )}
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
                <Button variant='main' type='submit' onClick={validate(handleSubmit)}>
                  Sign in
                </Button>
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

import React, { useState, useEffect } from 'react';
import styles from './RegisterForm.module.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [checkAllConsents, setCheckAllConsents] = useState(false);
  const [checkTermConditions, setCheckTermConditions] = useState(false);
  const [checkNewsletter, setCheckNewsletter] = useState(false);
  const [inputType, setInputType] = useState('password');

  useEffect(() => {
    if (checkNewsletter && checkTermConditions) {
      setCheckAllConsents(true);
    }
    if (checkAllConsents) {
      setCheckTermConditions(true);
      setCheckNewsletter(true);
    }
  }, [checkAllConsents, checkNewsletter, checkTermConditions]);

  const handleTermConditions = () => {
    setCheckAllConsents(false);
    setCheckTermConditions(checkTermConditions => !checkTermConditions);
  };
  const handleNewsletter = () => {
    setCheckAllConsents(false);
    setCheckNewsletter(checkNewsletter => !checkNewsletter);
  };

  const handleAllConsents = () => {
    setCheckAllConsents(!checkAllConsents);
    setCheckTermConditions(checkAllConsents => !checkAllConsents);
    setCheckNewsletter(checkAllConsents => !checkAllConsents);
  };
  const handleShowPassword = checked => {
    checked ? setInputType('text') : setInputType('password');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-center my-5'>
          <form className='col-12 col-md-8 col-lg-4'>
            <h3 className='text-center'>Create an account</h3>
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
            <input
              type={inputType}
              className='form-control my-3'
              placeholder='Repeat password*'
            ></input>
            <div className='form-check form-switch my-3'>
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
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={checkAllConsents}
                onChange={handleAllConsents}
              ></input>
              <label className='form-check-label'>Select all consents</label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={checkTermConditions}
                onChange={handleTermConditions}
              ></input>
              <label className='form-check-label'>
                I accept the <a href='#'>Terms & Conditions</a>
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={checkNewsletter}
                onChange={handleNewsletter}
              ></input>
              <label className='form-check-label'>I want to receive newsletter</label>
            </div>
            <div className='row my-4 align-items-center'>
              <div className='col text-start'>
                <Link to='/'>&lt;Back</Link>
              </div>
              <div className='col text-end'>
                <Link to='/'>
                  <Button variant='main' type='submit'>
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
            <div className='mt-5 text-center'>
              <Link to='/login'>Already have an account? Sign in&gt;</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;

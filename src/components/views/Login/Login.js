import React from 'react';
import styles from './Login.module.scss';
import LoginForm from '../../features/LoginForm/LoginForm';
const Login = () => {
  return (
    <div className={styles.root}>
      <LoginForm />
    </div>
  );
};
export default Login;

import React from 'react';
import styles from './Register.module.scss';
import RegisterForm from '../../features/RegisterForm/RegisterForm';
const Register = () => {
  return (
    <div className={styles.root}>
      <RegisterForm />
    </div>
  );
};
export default Register;

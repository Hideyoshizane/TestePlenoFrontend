import React from 'react';

import Logo from '../../../src/assets/logo/logo.png';
import LoginForm from '../../Components/LoginForm/LoginForm';

import styles from './LoginPage.module.css';

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<img src={Logo} alt="Capys Logo" />
			<LoginForm />
		</div>
	);
};

export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../src/assets/logo/logo.png';

import styles from './HomePage.module.css';

const LoginPage = () => {
	const navigate = useNavigate();

	const handleClickRedirect = () => {
		navigate('/');
	};
	return (
		<div className={styles.logoButton}>
			<img src={Logo} alt="Capys Logo" />
			<button className={styles.returnButton} onClick={handleClickRedirect}>
				Voltar
			</button>
		</div>
	);
};

export default LoginPage;

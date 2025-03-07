import React from 'react';

import { useNavigate } from 'react-router-dom';

import Logo from '../../../src/assets/logo/logo.png';
import styles from './RegisterPage.module.css';

import RegisterForm from '../../Components/RegisterForm/RegisterForm';

const RegisterPage = () => {
	const navigate = useNavigate();

	const handleClickRedirect = () => {
		navigate('/');
	};
	return (
		<div className={styles.container}>
			<div className={styles.logoButton}>
				<img src={Logo} alt="Capys Logo" />
				<button className={styles.returnButton} onClick={handleClickRedirect}>
					Voltar
				</button>
			</div>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;

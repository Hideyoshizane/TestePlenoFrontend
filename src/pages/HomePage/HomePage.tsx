import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../src/assets/logo/logo.png';
import UserName from '../../Components/UserName/UserName';
import HomeMainBody from '../../Components/HomeMainBody/HomeMainBody';

import styles from './HomePage.module.css';

const LoginPage: React.FC = () => {
	const navigate = useNavigate();

	const handleClickRedirect = () => {
		navigate('/');
	};

	return (
		<>
			<div className={styles.header}>
				<img src={Logo} alt="Capys Logo" />
				<button className={styles.returnButton} onClick={handleClickRedirect}>
					Sair
				</button>
			</div>
			<UserName userName="Teste Capys" vaga="Desenvolvedor Front-End" />
			<HomeMainBody />
		</>
	);
};

export default LoginPage;

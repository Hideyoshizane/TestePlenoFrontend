import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.css';
import EyeOpen from '../../assets/icons/eye_open';
import EyeClosed from '../../assets/icons/eye_closed';

const LoginForm = () => {
	const navigate = useNavigate();

	const handleClickRedirect = () => {
		navigate('/register');
	};

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<div className={styles.container}>
			<form>
				<h1 className={styles.title}>Login</h1>
				<div>
					<h3 className={styles.inputTitle}>Email</h3>
					<input className={styles.inputBox} type="text" placeholder="Username" required />
				</div>
				<div className={styles.passwordContainer}>
					<h3 className={styles.inputTitle}>Senha</h3>
					<div className={styles.passwordWrapper}>
						<input
							className={styles.inputBox}
							type={isPasswordVisible ? 'text' : 'password'}
							placeholder="Password"
							required
						/>
						<button type="button" className={styles.toggleButton} onClick={togglePasswordVisibility}>
							{isPasswordVisible ? <EyeOpen className={styles.eyeIcon} /> : <EyeClosed className={styles.eyeIcon} />}
						</button>
					</div>
				</div>
				<div className={styles.buttonHolder}>
					<button className={styles.loginButton} type="submit">
						Entrar
					</button>
				</div>
			</form>
			<h2 className={styles.registerTitle}>Ainda não possui uma conta?</h2>
			<button className={styles.registerButton} onClick={handleClickRedirect}>
				Cadastre-se
			</button>
		</div>
	);
};

export default LoginForm;

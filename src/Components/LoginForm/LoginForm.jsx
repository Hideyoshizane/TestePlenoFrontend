import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
	return (
		<div className={styles.container}>
			<form>
				<h1 className={styles.title}>Login</h1>
				<div>
					<h3 className={styles.inputTitle}>Email</h3>
					<input className={styles.inputBox} type="text" placeholder="Username" required />
				</div>
				<div>
					<h3 className={styles.inputTitle}>Senha</h3>
					<input className={styles.inputBox} type="password" placeholder="Password" required />
				</div>
				<div className={styles.buttonHolder}>
					<button className={styles.loginButton} type="submit">
						Entrar
					</button>
				</div>
			</form>
			<h2 className={styles.registerTitle}>Ainda não possui uma conta?</h2>
			<button className={styles.registerButton}>Cadastre-se</button>
		</div>
	);
};

export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './LoginForm.module.css';
import EyeOpen from '../../assets/icons/eye_open';
import EyeClosed from '../../assets/icons/eye_closed';

import { ResponseLogin } from '../../Mocks/login';
const LoginForm: React.FC = () => {
	const navigate = useNavigate();

	// State to manage form data
	const [formData, setFormData] = useState<{ email: string; password: string }>({
		email: '',
		password: '',
	});

	// State for password visibility
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	// Handle redirection to register page
	const handleClickRedirect = () => {
		navigate('/register');
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	// Handle form input changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Validate the form
	const validateForm = (): boolean => {
		let isValid = true;

		// Validate email
		if (!formData.email) {
			toast.error('Email é obrigatório.', {
				style: { backgroundColor: '#343B41', color: '#F8F9FA' },
			});
			isValid = false;
		} else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formData.email)) {
			toast.error('Por favor, insira um email válido.', {
				style: { backgroundColor: '#343B41', color: '#F8F9FA' },
			});
			isValid = false;
		}

		// Validate password
		if (!formData.password) {
			toast.error('Senha é obrigatória.', {
				style: { backgroundColor: '#343B41', color: '#F8F9FA' },
			});
			isValid = false;
		}

		return isValid;
	};

	// Handle form submit
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (validateForm()) {
			// Call ResponseLogin function
			const response = ResponseLogin({
				Email: formData.email,
				Senha: formData.password,
			});

			// Check the response status and show the appropriate toast
			if (response.status === 200) {
				toast.success(response.data.mensagem);
				// Redirect to another page (e.g., Dashboard)
				navigate('/dashboard');
			} else {
				toast.error('Falha no login, tente novamente.');
			}
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1 className={styles.title}>Login</h1>

				<div>
					<h3 className={styles.inputTitle}>Email</h3>
					<input
						className={styles.inputBox}
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className={styles.passwordContainer}>
					<h3 className={styles.inputTitle}>Senha</h3>
					<div className={styles.passwordWrapper}>
						<input
							className={styles.inputBox}
							type={isPasswordVisible ? 'text' : 'password'}
							name="password"
							placeholder="Senha"
							value={formData.password}
							onChange={handleInputChange}
							required
						/>
						<button
							type="button"
							className={styles.toggleButton}
							onClick={togglePasswordVisibility}
							aria-label="Mostrar/ocultar senha">
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

			{/* Toast Container to display toasts */}
			<ToastContainer />
		</div>
	);
};

export default LoginForm;

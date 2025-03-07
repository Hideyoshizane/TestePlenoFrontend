import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		bio: '',
		contact: '',
		role: 'option1',
	});

	const showToast = (type, message) => {
		if (type === 'success') {
			toast.success(message, {
				style: { backgroundColor: '#343B41', color: '#F8F9FA' },
				progressStyle: { backgroundColor: '#3FE864' },
			});
		} else if (type === 'error') {
			toast.error(message, {
				style: { backgroundColor: '#343B41', color: '#F8F9FA' },
				progressStyle: { backgroundColor: '#D32F2F' },
			});
		}
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSelectChange = (event) => {
		setFormData({
			...formData,
			role: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			showToast('error', 'Ops! Algo deu errado.');
		} else {
			showToast('success', 'Conta criada com sucesso!');
		}
	};

	//Aqui foi decidido não validar se as senhas estão iguais para que as senhas diferentes mostrem a notificação de erro.
	const validateForm = () => {
		const { name, email, password, confirmPassword, bio, contact } = formData;
		return name && email && password && confirmPassword && bio && contact;
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1 className={styles.title}>Crie sua conta</h1>
				<h3 className={styles.subTitle}>Rapido e grátis, vamos nessa</h3>

				<div>
					<h3 className={styles.inputTitle}>Nome</h3>
					<input
						className={styles.inputBox}
						type="text"
						name="name"
						placeholder="Digite aqui nome"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div>
					<h3 className={styles.inputTitle}>Email</h3>
					<input
						className={styles.inputBox}
						type="text"
						name="email"
						placeholder="Digite aqui seu email"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
				</div>

				<h3 className={styles.inputTitle}>Senha</h3>
				<div className={styles.passwordWrapper}>
					<input
						className={styles.inputBox}
						type="password"
						name="password"
						placeholder="Digite aqui sua senha"
						value={formData.password}
						onChange={handleInputChange}
						required
					/>
				</div>

				<h3 className={styles.inputTitle}>Confirmar Senha</h3>
				<div className={styles.passwordWrapper}>
					<input
						className={styles.inputBox}
						type="password"
						name="confirmPassword"
						placeholder="Digite novamente sua senha"
						value={formData.confirmPassword}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div>
					<h3 className={styles.inputTitle}>Bio</h3>
					<input
						className={styles.inputBox}
						type="text"
						name="bio"
						placeholder="Fale sobre você"
						value={formData.bio}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div>
					<h3 className={styles.inputTitle}>Contato</h3>
					<input
						className={styles.inputBox}
						type="tel"
						name="contact"
						placeholder="Opção de Contato"
						value={formData.contact}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div>
					<h3 className={styles.inputTitle}>Selecionar Cargo</h3>
					<select id="cargos" name="role" value={formData.role} onChange={handleSelectChange}>
						<option value="option1">Desenvolvedor Front-end</option>
						<option value="option2">Desenvolvedor Back-end</option>
					</select>
				</div>

				<div className={styles.buttonHolder}>
					<button className={styles.registerButton} type="submit" disabled={!validateForm()}>
						Cadastrar
					</button>
				</div>
			</form>

			<ToastContainer />
		</div>
	);
};

export default RegisterForm;

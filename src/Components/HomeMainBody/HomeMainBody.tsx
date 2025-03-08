import React, { useEffect, useState } from 'react';

import LivrosList from '../LivrosList/LivrosList';

import styles from './HomeMainBody.module.css';

const HomeMainBody: React.FC = () => {
	const [livros, setLivros] = useState<any[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/livros')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setLivros(data.lstLivros);
			})
			.catch((error) => console.error('Error fetching livros:', error));
	}, []);

	return (
		<div>
			{livros.length === 0 ? (
				<div className={styles.emptyState}>
					<h2 className={styles.title}>Que pena! Estamos em desenvolvimento :( </h2>
					<h2 className={styles.subTitle}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h2>
				</div>
			) : (
				<LivrosList livros={livros} />
			)}
		</div>
	);
};

export default HomeMainBody;

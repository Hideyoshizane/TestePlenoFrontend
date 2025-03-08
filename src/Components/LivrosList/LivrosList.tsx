import React from 'react';

import styles from './LivrosList.module.css';

interface Livro {
	ID: number;
	NOME: string;
	Star: number;
	DATA_PUBLICACAO: string;
	EDITORA: string;
	AUTOR: string;
	FL_FAVORITO: boolean;
}

interface LivrosListProps {
	livros: Livro[];
}

const LivrosList: React.FC<LivrosListProps> = ({ livros }) => {
	return (
		<div>
			<h1 className={styles.title}>Livros Disponíveis</h1>
			<div className={styles.livrosGrid}>
				{livros.map((livro) => (
					<div key={livro.ID} className={styles.livroItem}>
						<div className={styles.placeholderIcon}>Image</div>
						<h2>{livro.NOME}</h2>
						<p>Autor: {livro.AUTOR}</p>
						<p>Avaliação: {livro.Star} ⭐️</p>
						<p>{livro.FL_FAVORITO ? 'Favorito' : 'Não Favorito'}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LivrosList;

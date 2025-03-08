import React, { useState } from 'react';
import styles from './userName.module.css';

// Interface dos props
interface UserNameProps {
	userName: string;
	vaga: string;
}

const UserName: React.FC<UserNameProps> = ({ userName, vaga }) => {
	return (
		<div className={styles.subHeader}>
			<h2 className={styles.userName}>Olá, {userName}</h2>
			<h3 className={styles.vaga}>{vaga}</h3>
		</div>
	);
};

export default UserName;

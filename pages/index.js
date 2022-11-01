import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>QC Animal Adoption Center | Home</title>
				<meta
					name='description'
					content='A website for QC Animal Adoption Center'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>
				<h1>Hello world! test</h1>
			</div>
		</div>
	);
}

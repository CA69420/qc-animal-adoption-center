/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import bg from '../public/background.jpg';

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

			<img
				className={styles.background}
				src='/background.jpg'
				alt='background'
			/>

			<h1 className={styles.title}>Adopt a pet now</h1>

			{/* This is contents */}
			<section>
				<h1>Accounts</h1>
			</section>

			<section>
				<h1>Featured Pets</h1>
			</section>

			<section>
				<h1>Tips</h1>
			</section>
		</div>
	);
}

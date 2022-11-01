import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<>
			<div>
				<p className={styles.copyright}>
					Copyright {new Date().getFullYear()} &copy; QC Animal Care & Adoption
					Center E-Services
				</p>
			</div>
		</>
	);
};

export default Footer;

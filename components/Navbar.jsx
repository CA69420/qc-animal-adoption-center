import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Navbar.module.css';

import logo from '../public/logo.png';
import { CgMenuRight } from 'react-icons/cg';

const Navbar = () => {
	return (
		<>
			<div className={styles.navbarWrapper}>
				<div className={styles.logoWrapper}>
					<Image
						className={styles.logo}
						src={logo}
						alt='logo'
						width={72}
						height={72}
					/>
					<p className={styles.logoTitle}>
						QC Animal Care & Adoption Center E-Services
					</p>
				</div>

				{/* Mobile menu */}
				<div className={styles.mobileMenuWrapper}>
					<CgMenuRight className={styles.mobileMenu} />
				</div>

				{/* Desktop menu */}
				<div className={styles.desktopMenuWrapper}>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/services'>Services</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/faqs'>FAQs</Link>
						</li>
						<li>
							<Link href='/login'>Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;

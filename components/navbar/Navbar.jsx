import Image from "next/image";
import { useRouter } from "next/router";
import { KreateSellBrand } from "../../utils/assets";
import { Button } from "../";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
	const router = useRouter();
	return (
		<nav className={styles.navContainer}>
			<div className={styles.imgCont} onClick={() => router.push("/")}>
				<Image src={KreateSellBrand} alt="kreatesell brand logo" />
			</div>

			<div className={styles.navLinks}>
				<ul className="category-links">
					<li onClick={() => router.push("/how-it-works")}>How it works</li>
					<li onClick={() => router.push("/features")}>Features</li>
					<li onClick={() => router.push("/pricing")}>Pricing</li>
					<li>Blog</li>
					<li>FAQs</li>
				</ul>

				<div className={styles.btnLinks}>
					<div
						className={styles.loginBtn}
						onClick={() => router.push("/login")}
					>
						<Button text="Login" />
					</div>
					<div onClick={() => router.push("/signup")}>
						<Button text="Signup" bgColor="blue" />
					</div>
				</div>
			</div>
		</nav>
	);
};

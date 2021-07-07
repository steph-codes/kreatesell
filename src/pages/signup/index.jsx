import { Layout, Input, Button, Checkbox } from "components";
import Image from "next/image";
import Link from "next/link";
import { FacebookBtn, GoogleBtn } from "assets";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import styles from "./Signup.module.scss";
import { SignupSchema } from "./Signup.validation";

const Signup = () => {
	const initialValues = {
		email: "",
		password: "",
		terms: false,
	};

	const handleSubmit = () => {};

	const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		validationSchema: SignupSchema,
		validateOnChange: false,
	});

	return (
		<Layout>
			<div className={styles.signup}>
				<div className={styles.formContainer}>
					<div className={styles.form}>
						<h5 className={styles.formTitle}>
							Get started with a free account
						</h5>

						<p className={styles.continue}>Continue with</p>

						<div className={styles.socialBtn}>
							<div className={styles.google}>
								<Image src={GoogleBtn} alt="sign up with google" />
							</div>
							<div className="cursor">
								<Image src={FacebookBtn} alt="sign up with facebook" />
							</div>
						</div>

						<div className={styles.midline}>
							<span className={styles.lineA}></span>
							<p className={styles.text}>or</p>
							<span className={styles.lineB}></span>
						</div>

						<form onSubmit={formik.handleSubmit} autoComplete="off">
							<Input
								label="Email or Phone number"
								name="email"
								placeholder="Enter your Email or Phone number"
								onChange={formik.handleChange}
								errorMessage={formik?.errors?.email}
							/>

							<Input
								label="Password"
								name="password"
								placeholder="Create Password"
								onChange={formik.handleChange}
								errorMessage={formik?.errors?.password}
							/>

							<ReCAPTCHA
								sitekey="6LcHGn0bAAAAALTtYkBrcDA1pbaRiSXmkADz8khK"
								size="normal"
							/>

							<div className={styles.terms}>
								<Checkbox name="terms" onChange={formik.handleChange} />
								<p>I agree to terms & conditions</p>
							</div>
							<Button text="Sign up" bgColor="primaryBlue" />
						</form>

						<div className={styles.footer}>
							Already have an account?{" "}
							<Link href="/login">
								<a>Login</a>
							</Link>{" "}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Signup;

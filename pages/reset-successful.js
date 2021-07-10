import { useState, useEffect } from "react";
import {
	OnboardingLayout,
	Modal,
	ResetPasswordSuccesModal,
} from "../components";
import styles from "../public/css/ResetSuccess.module.scss";

const SuccessfulPasswordReset = () => {
	return (
		<OnboardingLayout Form={SuccessfulPasswordResetForm} socialBtn={false} />
	);
};

export const SuccessfulPasswordResetForm = () => {
	const [modalVisible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(true);
	}, []);

	return (
		<>
			<button
				className={styles.button}
				onClick={() => setVisible(!modalVisible)}
			>
				Click me
			</button>

			<Modal onClose={() => setVisible(false)} visible={modalVisible}>
				<ResetPasswordSuccesModal />
			</Modal>
		</>
	);
};

export default SuccessfulPasswordReset;

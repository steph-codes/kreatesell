import { useState } from "react";
import Image from "next/image";
import { Select } from "../../../components";
import { format } from "date-fns";
import { DateRangePicker } from "react-dates";
import { AuthLayout } from "../../../components/authlayout";
import styles from "../../../public/css/Dashboard.module.scss";
import {
	GrossSales,
	Profit,
	UnitSales,
	Visit,
	RightArrow,
} from "../../../utils";
import { RecentAnalytics } from "./partials";

const Dashboard = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [focusedInput, setFocusedInput] = useState(null);

	const date = format(new Date(), "yyyy-LL-d");

	const dayOptions = [
		{ value: "Custom", label: "Custom" },
		{ value: "Today", label: "Today" },
		{ value: "Yesterday", label: "Yesterday" },
		{ value: "Last 7 days", label: "Last 7 days" },
		{ value: "Last 30 days", label: "Last 30 days" },
		{ value: "This year", label: "This year" },
		{ value: "All time", label: "All time" },
	];

	const kreatorsOptions = [
		{ value: "Kreator’s Dashboard", label: "Kreator’s Dashboard" },
		{ value: "Quick Stats", label: "Quick Stats" },
		{ value: "Add Product", label: "Add Product" },
		{ value: "Coupons", label: "Coupons" },
		{ value: "Affiliate Options", label: "Affiliate Options" },
		{ value: "Reports", label: "Reports" },
	];

	const affiliateOptions = [
		{ value: "Affiliate Dashboard", label: "Affiliate Dashboard" },
		{ value: "Quick Stats", label: "Quick Stats" },
		{ value: "Find Products", label: "Find Products" },
	];

	return (
		<AuthLayout>
			<div className={styles.container}>
				<div className={styles.selector}>
					<div className={styles.kreatorSelect}>
						<Select
							options={kreatorsOptions}
							placeholder="Kreators"
							value="Custom Select"
							border="none"
							transparentBg={true}
						/>
					</div>
					<div className={styles.affiliateSelect}>
						<Select
							options={affiliateOptions}
							placeholder="Affiliates"
							value="Custom Select"
							border="none"
							transparentBg={true}
						/>
					</div>
				</div>

				<div className={styles.searchDate}>
					<div className={styles.input}>
						<Select options={dayOptions} value="Custom Select" />
					</div>

					<div className={styles.dayAndDate}>
						<div className={styles.selectCont}>
							<Select
								name="day"
								value="Select value"
								options={dayOptions}
								// className={styles.select}
							/>
						</div>
						<div className={styles.date}>
							<DateRangePicker
								startDate={startDate}
								startDateId="your_unique_start_date_id"
								endDate={endDate}
								endDateId="your_unique_end_date_id"
								onDatesChange={({ startDate, endDate }) => {
									setEndDate(endDate);
									setStartDate(startDate);
								}}
								focusedInput={focusedInput}
								onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
								startDatePlaceholderText={date}
								endDatePlaceholderText={date}
							/>
						</div>
					</div>
				</div>

				<div className={styles.midSection}>
					<div className={styles.title}>
						<div className={styles.userType}>Kreator</div>
						<div className={styles.userTypeLink}>
							<p>Kreator’s’s Dashboard</p>
							<div className={styles.arrowIcon}>
								<RightArrow color="#0072EF" />
							</div>
						</div>
					</div>
					<div className={styles.cardContainer}>
						<div className={styles.firstCard}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={Visit} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Total visits</div>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={UnitSales} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Sales in Unit</div>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={GrossSales} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Gross Sales</div>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={Profit} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Profit</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.midSection}>
					<div className={styles.title}>
						<div className={styles.userType}>Affiliate</div>
						<div className={styles.userTypeLink}>
							<p>Affiliate’s Dashboard</p>
							<div className={styles.arrowIcon}>
								<RightArrow color="#0072EF" />
							</div>
						</div>
					</div>

					<div className={styles.cardContainer}>
						<div className={styles.firstCard}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={Visit} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Total visits</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={UnitSales} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Sales in Unit</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={GrossSales} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Gross Sales</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.iconCont}>
								<div className={styles.icon}>
									<Image src={Profit} width="60" height="60" />
								</div>
								<div className={styles.countCont}>
									<div className={styles.value}>23456</div>
									<div className={styles.valueText}>Profit</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<RecentAnalytics />
			</div>
		</AuthLayout>
	);
};

export default Dashboard;

import React from "react";
import AppLayout from "../../component/AppLayout";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function detail() {
	const router = useRouter();
	const { id } = router.query;

	return (
		<AppLayout>
			<main className={styles.main}>
				detail page
				{id}
			</main>
		</AppLayout>
	);
}

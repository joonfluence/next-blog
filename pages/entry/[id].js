import React from "react";
import AppLayout from "../../component/AppLayout";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

function detail() {
	const router = useRouter();
	const { id } = router.query;

	console.log(router);
	console.log(id);

	return (
		<AppLayout>
			<main className={styles.main}>detail page</main>
		</AppLayout>
	);
}

export default detail;

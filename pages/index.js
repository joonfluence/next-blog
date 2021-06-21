import styles from "../styles/Home.module.css";
import AppLayout from "../component/template/AppLayout";
import ContentList from "../component/organisms/ContentList";

export default function Home() {
	return (
		<AppLayout className={styles.container}>
			<main id="main" className={styles.main}>
				<ContentList
					id="content-top"
					listName="인기글"
					className={styles.section__Top}
				/>
				<ContentList
					id="content-bottom"
					isBottom={true}
					className={styles.section__Bottom}
				/>
			</main>
		</AppLayout>
	);
}

import styles from "../styles/Home.module.css";
import AppLayout from "./_component/template/AppLayout";
import ContentList from "./_component/organisms/ContentList";

export default function Home() {
	return (
		<AppLayout>
			<main id="main" className={styles.main}>
				<ContentList
					id="content-top"
					listName="인기글"
				/>
				<ContentList
					id="content-bottom"
					isBottom={true}
				/>
			</main>
		</AppLayout>
	)
}

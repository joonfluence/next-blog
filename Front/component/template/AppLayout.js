import React from "react";
import Nav from "../nav";
import styles from "../../styles/Home.module.css";
import MenuArea from "../menuArea";

export default function AppLayout({ children }) {
	return (
		<div container className={styles.wrapper}>
			<p className={styles.webAccess}>
				<a href="#content-bottom">하위 본문으로 이동</a>
			</p>
			<header id="header" className={styles.header}>
				<Nav />
				<div className={styles.search_area}>
					<div>
						<input type="text" placeholder="검색어를 입력하세요" />
					</div>
				</div>
				<div>
					<MenuArea />
				</div>
			</header>
			{/* TODO: onClick -> display: None */}
			<main className={styles.container}>{children}</main>
			{/* TODO: onClick -> display: None */}
			<footer id="footer" className={styles.footer}>
				footer 입니다.
			</footer>
		</div>
	);
}

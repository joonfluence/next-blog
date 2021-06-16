import React from "react";
import styles from "../styles/Home.module.css";

export default function nav() {
	return (
		<nav id="nav" className={styles.nav}>
			header 입니다.
			<ul>
				<li>logo</li>
				<li>
					menu
					<ul>
						<li>sub-menu1</li>
						<li>sub-menu2</li>
					</ul>
				</li>
				<li>search logo</li>
			</ul>
		</nav>
	);
}

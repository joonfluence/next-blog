import React, { useState }  from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function menuArea() {
	const [favCategories, setFavCategories] = useState([
		{
			id: 1,
			title: "홈",
		},
		{
			id: 2,
			title: "TIL",
		},
	]);
	const [categories, setCategory] = useState([
		{
			id: 1,
			title: "웹 프로그래밍",
			lowCategory: ["HTML", "CSS", "JavaScript"],
			number: 17,
		},
		{
			id: 2,
			title: "생각정리",
			lowCategory: ["TIL", "회고"],
			number: 17,
		},
		{
			id: 3,
			title: "데이터시각화",
			lowCategory: ["d3.js", "R", "Python"],
			number: 17,
		},
	]);

	return (
		<div className={styles.menu_area}>
			<ul>
				{/* TODO: 한글 인코딩 문제 */}
				{/* TODO: 즐겨 찾는 게시판 등록 */}
				{favCategories.map((category) => (
					<li key={category.id}>
						<Link href={`/category/${category.title}`}>
							<a>{category.title}</a>
						</Link>
					</li>
				))}
			</ul>
			{categories.map((category) => (
				<ul key={category.id}>
					<li>
						<Link href={`/category/${category.title}`}>
							<h3>
								<a>{category.title}</a>
							</h3>
						</Link>
						<ul>
							{category.lowCategory.map((v, key) => (
								<li key={key}>
									<Link href={`/category/${category.lowCategory[key]}`}>
										<a>{v}</a>
									</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			))}
		</div>
	);
}

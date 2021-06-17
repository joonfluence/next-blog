import { useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "../component/card";
import AppLayout from "../component/AppLayout";
import Button from "../component/Button";

export default function Home() {
	// TODO: lint 줄바꿈 error 수정
	const [post, setPost] = useState([
		{
			id: 112412451513,
			title: "6월 15일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 16일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 17일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 15일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 16일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 17일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 15일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
		{
			id: 112412451513,
			title: "6월 16일 TIL",
			content:
				"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
			createdAt: new Date().toString().slice(4, 16),
			imageSource: "https://via.placeholder.com/100x100",
		},
	]);
	return (
		<AppLayout className={styles.container}>
			<main id="main" className={styles.main}>
				<h4>전체 글</h4>
				<section id="content-top" className={styles.section__Top}>
					{/* <Button /> */}
					{post.map((item) => (
						<Card
							key={item.id}
							content={item}
							className={styles.article__Top}
						/>
					))}
				</section>
				<section id="content-bottom" className={styles.section__Bottom}>
					{post.map((item) => (
						<Card
							key={item.id}
							content={item}
							isBottom={true}
							className={styles.article__Bottom}
						/>
					))}
				</section>
			</main>
		</AppLayout>
	);
}

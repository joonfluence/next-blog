import React from "react";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function TopSection() {
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
		<div>
			<section id="content-top" className={styles.section__Top}>
				{/* <Button /> */}
				{post.map((item) => (
					<Card key={item.id} content={item} className={styles.article__Top} />
				))}
			</section>
		</div>
	);
}

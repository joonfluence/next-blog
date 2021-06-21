import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { Grid } from "@material-ui/core";
import Card from "../molecules/card";
import ContentsStore from "../../store/ContentsStore";
// import { getContentsList } from "../../pages/_api";

export default function ContentList({ id, className, isBottom, listName }) {
	const [post, setPost] = useState([]);
	useEffect(async () => {
		// console.log(await ContentsStore.fetchFlowList());
		// console.log(ContentsStore.fetchList());
		// console.log(ContentsStore._contentList.get());
		// setPost(await ContentsStore.fetchList());
	}, []);

	useEffect(async () => {
		// console.log(await ContentsStore.fetchFlowList());
		setPost(await ContentsStore.getList());
		// console.log(ContentsStore.contentList);
	}, []);

	return (
		<section id={id} className={className}>
			<div>
				{!isBottom && <h4>{listName}</h4>}
				<Grid container spacing={1}>
					{post &&
						post.length !== 0 &&
						post.map((item) => (
							<Card
								sm={3}
								isBottom={isBottom}
								key={item.id}
								content={item}
								className={styles.article__Top}
							/>
						))}
				</Grid>
			</div>
		</section>
	);
}

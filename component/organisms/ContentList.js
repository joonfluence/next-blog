import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { Grid } from "@material-ui/core";
import Card from "../molecules/card";
import ContentsStore from "../../store/ContentsStore";

export default function ContentList({ id, className, isBottom, listName }) {
	const [post, setPost] = useState([{}]);
	useEffect(() => {
		console.log(ContentsStore.getList());
		setPost(ContentsStore.getList());
	}, []);

	return (
		<section id={id} className={className}>
			<div>
				{!isBottom && <h4>{listName}</h4>}
				<Grid container spacing={1}>
					{post &&
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

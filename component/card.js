import React from "react";
import Link from "next/link";
import { Grid } from "@material-ui/core";

export default function card({ content, className, isBottom, sm }) {
	return (
		<Grid item xs={12} sm={sm} className={className}>
			<Link href={`/entry/${content.id}`}>
				<a>
					<div>{!isBottom && <img src={content.imageSource} />}</div>
					<div>
						<h4>{content.title}</h4>
						<div>{isBottom && content.content}</div>
						{content.createdAt}
					</div>
					<div>{isBottom && <img src={content.imageSource} />}</div>
				</a>
			</Link>
		</Grid>
	);
}

import React, { FC } from "react";
import Link from "next/link";
import { Grid } from "@material-ui/core";

export type Props = {
	content: {
		id: string,
		imageSource: string,
		title: string,
		createdAt: Date,
		content: string,
	},
	isBottom?: boolean,
	sm: number,
};

const Component: FC<Props> = ({ content, isBottom, sm }) => {
	return (
		<Grid item xs={12} sm={sm}>
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

export default Component;
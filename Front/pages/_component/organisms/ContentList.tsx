import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "../molecules/Card";
import ContentsStore from "../../entry/entry.vm";
import styled from 'styled-components';

const Article = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
`;

export type Props = {
	id?: string,
	isBottom?: string,
	listName?: string,
}

const Component: React.FunctionComponent<Props> = ({ id, isBottom, listName }) => {
	const [post, setPost] = useState([]);
	// TODO : VM 연동 작업 필요 
	// useEffect(async () => (setPost(await ContentsStore.getList()))
	// , []);

	return (
		<Article id={id}>
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
							/>
						))}
				</Grid>
			</div>
		</Article>
	);
}

export default Component;
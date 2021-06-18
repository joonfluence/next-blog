import React from "react";
import AppLayout from "../../component/template/AppLayout";
import ContentList from "../../component/organisms/ContentList";
import styled from "styled-components";

const ContentLayout = styled.section``;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const TitleBlock = styled.div``;
const ContentBlock = styled.div``;

function detail() {
	return (
		<AppLayout>
			<ContentLayout>
				<ContentWrapper>
					<TitleBlock>
						<h1>title.</h1>
						<p>category.</p>
						<span>writter.</span>
						<span>createdAt.</span>
						<span>icon.</span>
						<span>comment.</span>
					</TitleBlock>
					<ContentBlock>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
						dicta debitis ex at doloribus, nulla cupiditate recusandae, natus,
						nesciunt voluptates amet rerum labore maiores minus dolore minima
						earum nemo error. Modi ipsa similique perspiciatis ex quibusdam
						animi quaerat doloremque voluptate reprehenderit aliquid. Veniam
						dolorum, autem porro repellendus soluta voluptas qui vel ut
						perferendis suscipit. Rem reprehenderit cupiditate quibusdam iure.
						Est.
					</ContentBlock>
				</ContentWrapper>
				<ContentList listName="관련글" />
				<div>comment section.</div>
				<div>paging section.</div>
			</ContentLayout>
		</AppLayout>
	);
}

export default detail;

import React from "react";
import Nav from "../organisms/nav";
import MenuArea from "../MenuArea";
import styled from 'styled-components';

const WebAccess = styled.p`
  position: absolute;
  color: white;
  background-color: rgb(151, 151, 245);
  width: 100%;
  height: 75px;
  line-height: 75px;
  text-align: center;
  top: -9999px;`

  const SearchArea = styled.div`
  display: none;
  z-index: 100;
  background-color: white;
  width: 100%;
  flex: 1 1;
  `;

  const Footer = styled.footer`
  /* display: none; */
  display: flex;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export default function AppLayout({ children }) {
	return (
		<div>
			<WebAccess>
				<a href="#content-bottom">하위 본문으로 이동</a>
			</WebAccess>
			<header id="header">
				<Nav />
				<SearchArea>
					<div>
						<input type="text" placeholder="검색어를 입력하세요" />
					</div>
				</SearchArea>
				<div>
					<MenuArea />
				</div>
			</header>
			{/* TODO: onClick -> display: None */}
			<main>{children}</main>
			{/* TODO: onClick -> display: None */}
			<Footer id="footer">
				Footer 입니다.
			</Footer>
		</div>
	);
}

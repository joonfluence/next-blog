import React, { useCallback } from "react";
import Link from "next/dist/client/link";

const Component: React.FunctionComponent = () => {
	const ClickHandler = useCallback((e) => {
		// TODO: 버튼 클릭 시, 메뉴 카테고리 팝업
		// e.target.styles.display = "none";
		console.log(e.target.parentNode);
	}, []);

	return (
		<nav id="nav">
			<ul>
				<Link href="/">
					<h1>
						<a>blog title.</a>
					</h1>
				</Link>
				{/* TODO: 버튼 클릭 시 새로운 화면 보여줄 것 */}
				{/* TODO: SVG 이미지 추가 할 것 */}
				<li>search bar</li>
				{/* TODO: 버튼 클릭 시 새로운 화면 보여줄 것 */}
				<li>
					menu bar
					<ul>
						<li>sub-menu1</li>
						<li>sub-menu2</li>
					</ul>
				</li>
				<button onClick={ClickHandler}>X</button>
			</ul>
		</nav>
	);
}

export default Component;
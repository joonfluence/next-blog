import React from "react";
import Link from "next/link";

export default function card({ content, className, isBottom }) {
	return (
		<article className={className}>
			<Link href={`/entry/:${content.id}`}>
				<a>
					{!isBottom && <img src={content.imageSource} />}
					<div>
						<div>{content.title}</div>
						{isBottom && <p>{content.content}</p>}
						<div>{content.createdAt}</div>
					</div>
					{isBottom && <img src={content.imageSource} />}
				</a>
			</Link>
		</article>
	);
}

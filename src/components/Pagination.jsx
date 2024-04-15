import React from "react";

const Pagination = ({ page }) => {
	const pageArray =
		page <= 3 || isNaN(page)
			? [1, 2, 3, 4, 5]
			: page >= 13
			? [11, 12, 13, 14, 15]
			: [page - 2, page - 1, page, page + 1, page + 2];
	console.log(pageArray);
	return (
		<div className="pagination">
			{page > 3 && (
				<a className="txt-nav" href={`?page=${page - 1}`}>
					Newer post
				</a>
			)}

			{pageArray.map((num) => (
				<a
					className={`page-num ${num === page ? "active" : ""}`}
					href={`?page=${num}`}
				>
					{num}
				</a>
			))}
			{(page < 13 || isNaN(page)) && (
				<a className="txt-nav" href={`?page=${page + 1}`}>
					Older post
				</a>
			)}
		</div>
	);
};

export default Pagination;

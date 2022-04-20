import React from "react";

export default function ReviewStars(props) {
	const createStars = (count) => {
		const starsArray = [];
		if (count) {
			for (let i = 0; i < count; i++) {
				starsArray.push(<i className="fas fa-star yellow-star"></i>);
			}
			for (let i = 0; i < 5 - count; i++) {
				starsArray.push(<i className="fas fa-star gray-star"></i>);
			}
		}
		return starsArray;
	};
	return <p className="review-stars-container">{createStars(props.count)}</p>;
}

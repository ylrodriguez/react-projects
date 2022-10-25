import React, { useEffect, useState } from 'react';
import Review from './Review';
import reviewsData from './data';

function App() {

	const [reviews, setReviews] = useState([]);
	const [selectedReview, setSelectedReview] = useState();
	const [selectedIndex, setSelectedIndex] = useState();

	const fetchReviews = () => {
		setReviews(reviewsData);
		setSelectedIndex(0);
	};

	function randomExcluded(start, end, excluded) {
		var n = excluded
		while (n == excluded)
			n = Math.floor((Math.random() * (end - start + 1) + start));
		return n;
	}

	useEffect(() => {
		fetchReviews();
	}, []);

	useEffect(() => {
		setSelectedReview(reviews[selectedIndex]);
	}, [selectedIndex])

	const onChangeReview = (action) => {
		debugger
		let index = 0;
		switch (action) {
			case 'next':
				index = selectedIndex == reviews.length - 1 ? 0 : selectedIndex + 1;
				break;
			case 'prev':
				index = selectedIndex <= 0 ? reviews.length - 1 : selectedIndex - 1;
				break;
			case 'random':
				index = randomExcluded(0, reviews.length - 1, selectedIndex)
				break;
		}
		setSelectedIndex(index);
	}

	return (
		<main>
			<section className='container'>
				<div className='title'>
					<h2>Our Reviews</h2>
					<div className="underline"></div>
				</div>
				{selectedReview &&
					<Review
						review={selectedReview}
						onChangeReview={onChangeReview}>
					</Review>}
			</section>
		</main>
	);
}

export default App;

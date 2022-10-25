import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ review, onChangeReview }) => {
	const { id, name, job, image, text } = review;
	return (
		<article className='review'>
			<div className="img-container">
				<img className='person-img' src={image} alt={review.name} />
				<span className="quote-icon"><FaQuoteRight /></span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={() => onChangeReview('prev')}><FaChevronLeft /></button>
				<button className="next-btn" onClick={() => onChangeReview('next')}><FaChevronRight /></button>
			</div>
			<button className="random-btn" onClick={() => onChangeReview('random')}>Surprise me</button>
		</article>
	)
};

export default Review;

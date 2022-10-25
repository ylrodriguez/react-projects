import React, { useState } from 'react';

const Categories = ({ categories, changeCategory }) => {

	const [selectedCategory, setSelectedCategory] = useState('all');

	const onFilter = (type) => {
		setSelectedCategory(type);
		changeCategory(type);
	}

	return (
		<div className="btn-container">
			<button
				type="button"
				className={`filter-btn ${selectedCategory == 'all' ? 'selected' : ''}`}
				onClick={() => onFilter('all')}>
				All
			</button>
			{
				categories.map(cat => {
					return <button
						type="button"
						className={`filter-btn ${selectedCategory == cat ? 'selected' : ''}`}
						onClick={() => onFilter(cat)}>
						{cat}
					</button>
				})
			}
		</div>
	);
};

export default Categories;

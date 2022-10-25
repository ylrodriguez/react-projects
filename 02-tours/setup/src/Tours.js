import React, { useState, useEffect } from 'react'
import Tour from './Tour';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

const Tours = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const getTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setTours(data);
			setIsLoading(false);
		}
		catch (err) {
			setIsLoading(false);
		}
	}

	const removeTour = (id) => {
		let index = tours.findIndex(t => t.id == id);
		tours.splice(index, 1);
		setTours([...tours]);
	}

	useEffect(() => {
		getTours();
	}, []);

	// Loading 
	if (isLoading) {
		return <Loading></Loading>;
	}

	// Show data
	return (
		<>
			<div className='title'>
				<h2>{tours.length ? 'Our tours' : 'No tours left'}</h2>
				<div className="underline"></div>
				{!tours.length && <button className="btn" onClick={getTours}>Refresh</button>}
			</div>
			<div>
				{
					tours.map(tour => {
						return (
							<Tour
								key={tour.id}
								tour={tour}
								onDelete={removeTour}>
							</Tour>
						)
					})
				}
			</div>
		</>
	);
};

export default Tours;

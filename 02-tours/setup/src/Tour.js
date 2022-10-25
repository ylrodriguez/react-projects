import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
	const { id, image, info, name, price } = tour;
	const [isShowingMore, setIsShowingMore] = useState(false);

	return (
		<article className='single-tour'>
			<img src={image} alt="" />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">$ {price}</h4>
				</div>
				{
					isShowingMore ?
						<p>
							{info}
							<button onClick={() => setIsShowingMore(!isShowingMore)}>Read less</button>
						</p> :
						<p>
							{info.slice(0, 200)}
							{
								info.length > 200 &&
								<>...
									<button onClick={() => setIsShowingMore(!isShowingMore)}>
										Show more
									</button>
								</>
							}
						</p>
				}
				<button className="delete-btn" onClick={() => onDelete(id)}>Not interested</button>
			</footer>
		</article>
	)
};

export default Tour;

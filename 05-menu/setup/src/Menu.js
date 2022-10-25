import React from 'react';

const Menu = ({ menu }) => {
	return (
		<div className="section-center">

			{
				menu.map(item => {
					const { id, title, category, price, img, desc } = item;
					return <article className="menu-item">
						<img src={img} className="photo" alt="" />
						<div className="item-info">
							<header>
								<h4>{title}</h4>
								<h4 className='price'>${price}</h4>
							</header>
							<p className="item-text">
								{desc}
							</p>
						</div>
					</article>
				})
			}
		</div>
	)
}

export default Menu;

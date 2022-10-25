import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

	const [menu, setMenu] = useState(items);
	const [filteredMenu, setFilteredMenu] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let foundCategories = menu.map(menu => menu.category);
		let uniqueCategories = foundCategories.filter((cat, index) => foundCategories.indexOf(cat) === index);
		setCategories(uniqueCategories);
		changeCategory('all');
	}, [])


	const changeCategory = (type) => {
		let filtered = menu.filter(item => type == 'all' ? true : item.category == type);
		setFilteredMenu(filtered);
	}

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our menu</h2>
					<div className="underline"></div>
				</div>
			</section>

			<Categories categories={categories} changeCategory={changeCategory}></Categories>
			<Menu menu={filteredMenu}></Menu>
		</main>
	)
}

export default App;

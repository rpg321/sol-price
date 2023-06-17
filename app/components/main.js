"use client";

import { useState } from "react";

export default function Main({ price }) {
	const [itemName, setItemName] = useState("Salamis");
	const [itemQuantity, setItemQuantity] = useState(8);

	const items = [
		{
			id: 1,
			name: "freddo bars",
			price: 1.25,
		},
		{
			id: 2,
			name: "cappuccinos from starbucks",
			price: 4.3,
		},
		{
			id: 3,
			name: "cinema tickets",
			price: 9,
		},
		{
			id: 4,
			name: "pints",
			price: 5.95,
		},
		{
			id: 5,
			name: "litres of petrol",
			price: 1.43,
		},
		{
			id: 6,
			name: "big macs",
			price: 5.09,
		},
		{
			id: 7,
			name: "italian BMT's from subway",
			price: 6.29,
		},
		{
			id: 8,
			name: "fivedollarnft's",
			price: 3.9,
		},
		{
			id: 9,
			name: "large fish & chips",
			price: 11,
		},
		{
			id: 10,
			name: "months of netflix",
			price: 6.99,
		},
	];

	function handleClick() {
		//choose random item, get its price, divide it by 'price' and round it to 2dp
		let item = items[Math.floor(Math.random() * items.length)];
		let item_name = item.name;
		let item_price = item.price;
		let quantity = parseInt(price) / item_price;
		quantity = Math.round((quantity + Number.EPSILON) * 100) / 100;

		setItemName(item_name);
		setItemQuantity(quantity);

		console.log(quantity + " x " + item_name);
	}

	return (
		<>
			<p className="text-2xl md:text-4xl font-bold tracking-tighter block mt-12">
				1 $sol is &pound;{price}{" "}
				<span className="text-[#00FFA3] font-extrabold inline-block mx-1">
					orrrr
				</span>{" "}
				{itemQuantity} {itemName}
			</p>
			<button
				onClick={handleClick}
				className="rounded-3xl mx-auto font-bold bg-[#03E1FF] text-black text-base md:text-lg tracking-tighter block mt-8 md:mt-10 px-6 py-2 transition duration-300 hover:bg-[#DC1FFF]"
			>
				What else could 1 $sol buy?
			</button>
		</>
	);
}

import getPrice from "./api/getPrice";
import Main from "./components/main";

export default async function Home() {
	const price = await getPrice();

	return (
		<main className="text-center px-4">
			<h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
				The price of <span className="gradientText">Solana</span>
			</h2>
			<p className="tracking-tigher text-xs block mt-2 italic">
				(relative to other random things)
			</p>
			<Main price={price.solana.gbp} />
		</main>
	);
}

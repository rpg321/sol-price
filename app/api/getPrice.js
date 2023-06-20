export default async function getPrice() {
	const res = await fetch(
		"https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=gbp",
		{
			next: { revalidate: 60 }, //refresh cache after 60 seconds
		}
	);

	return res.json();
}

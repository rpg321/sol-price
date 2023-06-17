import "./globals.css";
import Footer from "./components/footer.js";
import Header from "./components/header.js";

export const metadata = {
	title: "The Price of $SOL (relative to other random things)",
	description:
		"The current price of Solana, relative to various random items.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex min-h-screen flex-col items-center place-content-center justify-between pb-12">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

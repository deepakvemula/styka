import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
	title: "Styka Studio",
	description: "Architecture & Interiors",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

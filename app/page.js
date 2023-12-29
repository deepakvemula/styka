import Image from "next/image";
import styles from "./globals.css";
import Hero from "@/components/hero";
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.contents}>
				<h1>deep blue cinematics</h1>
				<div className={styles.buttons}>
					<button>our work</button>
					<button>our story</button>
				</div>
			</div>
			<video
				src={require("../public/video.mp4")}
				autoPlay
				muted
				loop
				className={styles.video}
			/>
		</main>
	);
}

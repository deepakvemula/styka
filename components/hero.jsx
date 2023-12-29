const Hero = () => {
	return (
		<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
			<div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
				Welcome to my site!
			</div>
			<video
				autoPlay
				muted
				loop
				className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
				src={require("../public/video.mp4")}
			/>
		</header>
	);
};

export default Hero;

import Link from "next/link";
import Image from "next/image";
// import CreativesImage from "@/public/images/creatives.jpg";
import CreativesImage from "@/public/images/assets/3.png";
import CreativesImage2 from "@/public/images/assets/4.png";

// import Creative01 from "@/public/images/creative-01.jpg";
// import Creative02 from "@/public/images/creative-02.jpg";
// import Creative03 from "@/public/images/creative-03.jpg";
// import Creative04 from "@/public/images/creative-04.jpg";
// import CreativeBg01 from "@/public/images/creative-bg-01.jpg";
// import CreativeBg02 from "@/public/images/creative-bg-02.jpg";
// import CreativeBg03 from "@/public/images/creative-bg-03.jpg";
// import CreativeBg04 from "@/public/images/creative-bg-04.jpg";

export default function Creatives() {
	return (
		<section>
			<div className="max-w-6xl px-4 mx-auto sm:px-6">
				<div className="py-12 md:py-20 ">
					{/* Section header */}
					<div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
						<h2 className="h2 font-cabinet-grotesk">
							Sharing the Arts is backed by{" "}
							<a
								className="decoration-yellow-500 decoration-2 underline-offset-2 hover:underline"
								href="https://www.philanthropytank.org/"
							>
								Philanthropy Tank
							</a>
						</h2>
					</div>
					{/* Section content */}
					<div className="flex flex-col max-w-xl mx-auto space-y-8 md:max-w-none md:flex-row md:items-center md:space-y-0">
						{/* Creatives cards */}
						<div className="h-[200px] sm:h-[315px] md:w-1/2" data-aos-id-cards>
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/r8FwX27743A?si=jDcO2dJ5iLceaeFT"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>

						{/* Content */}
						<div className="md:w-1/2 md:pl-10 lg:pl-20">
							<div className="text-center md:text-left">
								<h3 className="mb-4 text-4xl h3 font-cabinet-grotesk">
									For Students, By Students
								</h3>
								<p className="mb-6 text-xl text-gray-500">
									Sharing the Arts was a 2023 Philanthropy Tank finalist awarded
									$11,000. We've been working since then to expand our reach and
									impact.
								</p>
								<div>
									<a
										className="text-white bg-yellow-500 shadow-sm btn hover:bg-yellow-600"
										href="https://www.philanthropytank.org/sharing-the-arts-starts-mentorship-program/"
									>
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-full">
						<Image
							className="inline-block object-cover max-w-screen-sm pt-12 mb-12 max-h-96"
							src={CreativesImage}
							// width={330}
							// height={181}
							alt="Creatives"
						/>
						<Image
							className="hidden object-cover max-w-screen-sm pt-12 mb-12 md:inline-block max-h-96"
							src={CreativesImage2}
							// width={330}
							// height={181}
							alt="Creatives"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

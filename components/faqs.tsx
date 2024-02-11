import Image from "next/image";
import CreativesImage5 from "@/public/images/assets/5.png";
import CreativesImage6 from "@/public/images/assets/6.png";
import CreativesImage7 from "@/public/images/assets/7.png";

export default function Faqs() {
	return (
		<section>
			<div className="max-w-6xl px-4 mx-auto sm:px-6">
				<div className="py-12 border-b border-gray-100 md:py-20">
					{/* Section header */}
					<div className="pb-12 md:pb-20">
						<h2 className="h2 font-cabinet-grotesk">Questions and answers</h2>
					</div>
					{/* Columns */}
					<div className="space-y-8 md:flex md:space-x-12 md:space-y-0">
						{/* Column */}
						<div className="w-full space-y-8 md:w-1/2">
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									What is the difference between the Free and Paid versions?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Do you have student or non-profit discounts?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									How is the price determined?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
						</div>
						{/* Column */}
						<div className="w-full space-y-8 md:w-1/2">
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Do I need coding knowledge to use this product?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Is there a way to become an Affiliate reseller?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									What forms of payment do you accept?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full h-full pt-12 mb-12 -ml-10 sm:ml-0 sm:flex-row">
					<Image
						className="object-cover max-w-screen-sm sm:max-h-96 "
						src={CreativesImage5}
						alt="Creatives"
					/>
					<Image
						className="object-cover max-w-screen-sm sm:max-h-96"
						src={CreativesImage6}
						alt="Creatives"
					/>
					<Image
						className="object-cover max-w-screen-sm sm:max-h-96"
						src={CreativesImage7}
						alt="Creatives"
					/>
				</div>
			</div>
		</section>
	);
}

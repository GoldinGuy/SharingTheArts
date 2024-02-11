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
									What is our goal?
								</h4>
								<p className="text-gray-500">
									Sharing The Arts is dedicated to mentoring underserved
									elementary school students in the arts by providing them the
									opportunity to discover their passions in the art areas of
									music, dance, visual arts, and communications. Through weekly
									sessions at a local school led by a group of Dreyfoos
									volunteer mentors, we hope to instill in the students a love
									for the arts with the ultimate goal of them auditioning and
									attending the middle and high schools of the arts in our
									county– something they might not be able to do otherwise. 
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									How does Sharing the Arts work?
								</h4>
								<p className="text-gray-500">
									Each Monday, high school students from Dreyfoos School of the
									Arts curate lesson plans and teach students about their art
									area. We aim to focus on two of the arts per week, rotating
									through them to keep students engaged and always looking
									forward to the next week.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Where is Sharing the Arts?
								</h4>
								<p className="text-gray-500">
									Currently, Sharing the Arts is working with The Foundations
									School in West Palm Beach, Florida.
								</p>
							</div>
						</div>
						{/* Column */}
						<div className="w-full space-y-8 md:w-1/2">
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Who runs Sharing the Arts?
								</h4>
								<p className="text-gray-500">
									Sharing the Arts is student-run organization, with Dreyfoos
									students as mentors, leaders, and organizers. It is led by
									siblings Nathan and Lila Goldin.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Where did the idea for Sharing the Arts come from?
								</h4>
								<p className="text-gray-500">
									The idea for this project came from founder Nathan Goldin, as
									he reflected on his time in arts schools and wanted to create
									a program to give back to the community, providing students of
									all backgrounds with the resources they would need to apply
									for those schools.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-bold font-cabinet-grotesk">
									Why should I donate?
								</h4>
								<p className="text-gray-500">
									Sharing the Arts is responsible for purchasing any supplies
									that our students need to prepare for an audition or hone
									their craft. This may include but is not limited to dance
									shoes, art supplies, or instruments. Without funds, we cannot
									do our duty to provide these students with everything they
									need.
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

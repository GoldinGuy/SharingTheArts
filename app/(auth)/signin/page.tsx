export const metadata = {
	title: "Sign In - Sharing the Arts",
	description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
	return (
		<>
			{/* Page header */}
			<div className="max-w-3xl pb-12 mx-auto text-center">
				<h1 className="h2 font-cabinet-grotesk">
					Welcome back, Sharing the Arts!
				</h1>
			</div>
			{/* Form */}
			<div className="max-w-sm mx-auto">
				<form>
					<div className="flex flex-wrap mb-4">
						<div className="w-full">
							<label
								className="block mb-1 text-sm font-medium text-gray-500"
								htmlFor="email"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								className="w-full text-gray-800 form-input"
								required
							/>
						</div>
					</div>
					<div className="flex flex-wrap mb-4">
						<div className="w-full">
							<label
								className="block mb-1 text-sm font-medium text-gray-500"
								htmlFor="password"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								className="w-full text-gray-800 form-input"
								required
							/>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-between mt-6">
						<Link
							className="text-sm font-medium text-yellow-500 sm:text-base decoration-yellow-500 decoration-2 underline-offset-2 hover:underline"
							href="/signup"
						>
							Support our Mission
						</Link>
						<div className="ml-2">
							<button className="text-white bg-yellow-500 shadow-sm btn-sm hover:bg-yellow-600">
								Learn More
							</button>
						</div>
					</div>
				</form>
				<div className="flex items-center my-6">
					<div
						className="mr-3 border-t border-gray-200 grow"
						aria-hidden="true"
					/>
					<div className="text-sm italic text-gray-500">or</div>
					<div
						className="ml-3 border-t border-gray-200 grow"
						aria-hidden="true"
					/>
				</div>
				<form>
					<div className="flex flex-wrap">
						<div className="w-full">
							<button className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center">
								<svg
									className="fill-white opacity-80"
									width="16"
									height="14"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m5.063 0 3.495 4.475L12.601 0h2.454L9.696 5.931 16 14h-4.938L7.197 9.107 2.771 14H.316L6.05 7.658 0 0h5.063Zm-.74 1.347H2.866l8.875 11.232h1.36L4.323 1.347Z" />
								</svg>
								<span className="flex-auto pl-16 pr-8 -ml-16">
									Join with Twitter
								</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

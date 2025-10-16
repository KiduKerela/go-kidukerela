import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-gray-900 py-8 text-white sm:py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
					<div>
						<h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">Support</h3>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									AirCover
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Combating discrimination
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Supporting people with disabilities
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Cancellation options
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">Company</h3>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Community Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Privacy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Terms
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">Contact</h3>
						<ul className="space-y-1.5 sm:space-y-2">
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Partnerships
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-300 hover:text-white sm:text-base"
								>
									Get in touch
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">Social</h3>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-300 hover:text-white"
							>
								<span className="sr-only">Facebook</span>
								{/* Facebook icon */}
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white"
							>
								<span className="sr-only">Twitter</span>
								{/* Twitter icon */}
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white"
							>
								<span className="sr-only">Instagram</span>
								{/* Instagram icon */}
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white"
							>
								<span className="sr-only">LinkedIn</span>
								{/* LinkedIn icon */}
							</a>
						</div>
					</div>
				</div>

				<div className="mt-6 border-t border-gray-800 pt-6 text-center sm:mt-8 sm:pt-8">
					<p className="text-sm text-gray-400 sm:text-base">
						&copy; 2025 Kidu Kerala. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

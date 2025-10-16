import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-gray-900 py-12 text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div>
						<h3 className="mb-4 text-xl font-bold">Support</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									AirCover
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Combating discrimination
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Supporting people with disabilities
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Cancellation options
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-xl font-bold">Company</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Community Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Privacy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Terms
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-xl font-bold">Contact</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Partnerships
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 hover:text-white"
								>
									Get in touch
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-xl font-bold">Social</h3>
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

						<div className="mt-6">
							<p className="mb-2 text-sm text-gray-400">
								We accept
							</p>
							<div className="flex space-x-2">
								<Image
									src="/visa.png"
									alt="Visa"
									width={40}
									height={24}
								/>
								<Image
									src="/mastercard.png"
									alt="Mastercard"
									width={40}
									height={24}
								/>
								<Image
									src="/paypal.png"
									alt="PayPal"
									width={40}
									height={24}
								/>
								<Image
									src="/stripe.png"
									alt="Stripe"
									width={40}
									height={24}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-gray-800 pt-8 text-center">
					<p className="text-gray-400">
						&copy; 2023 Kidu Kerala. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

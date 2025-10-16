import Image from 'next/image'
import Link from 'next/link'
import KeralaStay from '@/public/kerala_image_4.jpg'

export default function Newsletter() {
	return (
		<section id="contact" className="bg-white py-12 sm:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center overflow-hidden rounded-2xl bg-gray-100 md:flex-row">
					<div className="w-full md:w-2/5">
						<Image
							src={KeralaStay}
							alt="Newsletter"
							width={500}
							height={300}
							className="h-48 w-full object-cover sm:h-64 md:h-full"
						/>
					</div>
					<div className="flex w-full flex-col items-center justify-center gap-3 p-6 sm:gap-4 sm:p-8 md:w-3/5">
						<h2 className="mb-2 text-center text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
							Share your details and explore our magic!
						</h2>

						<div className="group relative inline-flex items-center justify-center">
							<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-green-500 to-yellow-300 opacity-60 blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
							<Link
								href="/contact-us"
								title="Get Started For Free"
								className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30 sm:px-8 sm:py-3 sm:text-base"
							>
								Contact Us
								<svg
									aria-hidden="true"
									viewBox="0 0 10 10"
									height="10"
									width="10"
									fill="none"
									className="-mr-1 ml-2 mt-0.5 stroke-white stroke-2"
								>
									<path
										d="M0 5h7"
										className="opacity-0 transition group-hover:opacity-100"
									></path>
									<path
										d="M1 1l4 4-4 4"
										className="transition group-hover:translate-x-[3px]"
									></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

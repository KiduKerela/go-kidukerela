import Image from 'next/image'
import Link from 'next/link'
import KeralaStay from '@/public/kerala_image_4.jpg'

export default function Newsletter() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center overflow-hidden rounded-2xl bg-gray-100 md:flex-row">
					<div className="md:w-2/5">
						<Image
							src={KeralaStay}
							alt="Newsletter"
							width={500}
							height={300}
							className=""
						/>
					</div>
					<div className="flex flex-col items-center justify-center gap-4 md:w-3/5">
						<h2 className="mb-4 text-4xl font-bold">
							Share your details and explore our magic!
						</h2>

						<div className="group relative inline-flex items-center justify-center gap-4">
							<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-green-500 to-yellow-300 opacity-60 blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
							<Link
								href="/contact-us"
								title="Get Started For Free"
								className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30"
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

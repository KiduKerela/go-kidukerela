import Image from 'next/image'
import KeralaExplore from '@/public/kerala_image_5.jpg'
import KeralaBoat from '@/public/kerala_image_6.jpg'
import KeralaBeach from '@/public/kerala_image_7.jpg'
import KeralaCultural from '@/public/kerala_image_8.jpg'

export default function ExploreKerala() {
	return (
		<section id="explore-kerala" className="relative py-12 text-white sm:py-16">
			<Image
				src={KeralaExplore}
				alt="Explore Kerala"
				fill
				className="object-cover"
			/>
			<div className="relative z-10 mx-auto max-w-7xl space-y-4 px-4 sm:space-y-8 sm:px-6 lg:px-8">
				<h2 className="mb-4 text-4xl font-bold sm:mb-6 sm:text-6xl lg:text-8xl">EXPLORE KERALA</h2>
				<hr />
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div className="flex flex-col">
						<p className="mb-6 max-w-md text-sm font-extralight sm:mb-8 sm:text-base lg:text-lg">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s
						</p>
						<button
							type="button"
							className="group relative isolation-auto z-10 flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-3 py-1.5 text-base text-black shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-emerald-500 before:transition-all before:duration-700 hover:text-gray-50 hover:before:left-0 hover:before:w-full hover:before:scale-150 hover:before:duration-700 sm:px-4 sm:py-2 sm:text-lg lg:font-semibold"
						>
							Explore
							<svg
								className="h-6 w-6 rotate-45 justify-end rounded-full border border-gray-700 p-1.5 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 sm:h-8 sm:w-8 sm:p-2"
								viewBox="0 0 16 19"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
									className="fill-gray-800 group-hover:fill-gray-800"
								></path>
							</svg>
						</button>
					</div>

					<div className="relative mb-4 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-6 md:grid-cols-3">
						<div className="relative h-48 overflow-hidden rounded-lg sm:h-56 md:h-64">
							<Image
								src={KeralaBoat}
								alt="Boat Ride"
								fill
								className="object-cover"
							/>

							<div className="absolute inset-0 flex items-end">
								<div className="p-3 sm:p-4">
									<h3 className="text-lg font-semibold sm:text-xl">
										Boat Ride
									</h3>
								</div>
							</div>
						</div>

						<div className="relative h-48 overflow-hidden rounded-lg sm:h-56 md:h-64">
							<Image
								src={KeralaBeach}
								alt="Beach Life"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-end">
								<div className="p-3 sm:p-4">
									<h3 className="text-lg font-semibold sm:text-xl">
										Beach Life
									</h3>
								</div>
							</div>
						</div>

						<div className="relative h-48 overflow-hidden rounded-lg sm:h-56 md:h-64">
							<Image
								src={KeralaCultural}
								alt="Cultural Stay"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-end">
								<div className="p-3 sm:p-4">
									<h3 className="text-lg font-semibold sm:text-xl">
										Cultural Stay
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

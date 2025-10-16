import Image from 'next/image'
import KeralaExplore from '@/public/kerala_img_5.jpg'
import KeralaBoat from '@/public/kerala_image_6.jpg'
import KeralaBeach from '@/public/kerala_image_7.jpg'
import KeralaCultural from '@/public/kerala_image_8.jpg'

export default function ExploreKerala() {
	return (
		<section className="relative py-16 text-white">
			<Image
				src={KeralaExplore}
				alt="Explore Kerala"
				fill
				className="object-cover"
			/>
			<div className="relative z-10 mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
				<h2 className="mb-6 text-8xl font-bold">EXPLORE KERALA</h2>
				<hr />
				<div className="grid grid-cols-2 gap-6">
					<div className="flex flex-col">
						<p className="mb-8 max-w-md text-lg font-extralight">
							Lorem Ipsum is simply dummy text of the printing
							and typesetting industry. Lorem Ipsum has been
							the industry's standard dummy text ever since
							the 1500s
						</p>
						<button
							type="button"
							className="group relative isolation-auto z-10 flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-4 py-2 text-lg text-black shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-emerald-500 before:transition-all before:duration-700 hover:text-gray-50 hover:before:left-0 hover:before:w-full hover:before:scale-150 hover:before:duration-700 lg:font-semibold"
						>
							Explore
							<svg
								className="h-8 w-8 rotate-45 justify-end rounded-full border border-gray-700 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
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

					<div className="relative mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src={KeralaBoat}
								alt="Boat Ride"
								fill
								className="object-cover"
							/>

							<div className="absolute inset-0 flex items-end">
								<div className="p-4">
									<h3 className="text-xl font-semibold">
										Boat Ride
									</h3>
								</div>
							</div>
						</div>

						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src={KeralaBeach}
								alt="Beach Life"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-end">
								<div className="p-4">
									<h3 className="text-xl font-semibold">
										Beach Life
									</h3>
								</div>
							</div>
						</div>

						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src={KeralaCultural}
								alt="Cultural Stay"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-end">
								<div className="p-4">
									<h3 className="text-xl font-semibold">
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

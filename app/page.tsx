import { Button } from '@/components/ui/button'
import {
	Search,
	MapPin,
	Calendar,
	Users,
	Shield,
	Clock,
	Award,
	Star,
	ChevronLeft,
	ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import KeralaStay from '@/public/kerala_image_4.jpg'
import KeralaExplore from '@/public/kerala_img_5.jpg'
import KeralaBoat from '@/public/kerala_image_6.jpg'
import KeralaBeach from '@/public/kerala_image_7.jpg'
import KeralaCultural from '@/public/kerala_image_8.jpg'
import KeralaHero from '@/public/kerala_hero_image.jpg'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-card'

export default function Homepage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative h-[calc(100vh-4rem)]">
				<div className="absolute inset-0">
					<Image
						src={KeralaHero}
						alt="Kerala Backwaters"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0"></div>
				</div>

				<div className="absolute z-10 mx-auto  h-fit max-w-2xl rounded-2xl bg-white p-8 text-gray-800">

					<h1 className="mb-4 text-3xl font-bold text-blue-600">
						Good Morning!
					</h1>
					<p className="mb-6 text-gray-600">
						Explore beautiful places in the world with Aranda
					</p>

					<Button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700">
						<Search className="h-5 w-5" />
						<span>Search</span>
					</Button>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="bg-gray-50 py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
						WHY CHOOSE US?
					</h2>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
								<Shield className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="mb-2 text-xl font-semibold">
								Competitive Prices
							</h3>
							<p className="text-gray-600">
								With over 500 suppliers and the purchasing power
								of our planning and supporting industry, Lorem
								Ipsum
							</p>
						</div>

						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
								<Award className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="mb-2 text-xl font-semibold">
								Award Winning
							</h3>
							<p className="text-gray-600">
								With over 500 suppliers and the purchasing power
								of our planning and supporting industry, Lorem
								Ipsum
							</p>
						</div>

						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
								<Clock className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="mb-2 text-xl font-semibold">
								Seamless Experience
							</h3>
							<p className="text-gray-600">
								With over 500 suppliers and the purchasing power
								of our planning and supporting industry, Lorem
								Ipsum
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Partners Section */}
			<section className="bg-white py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
						OUR PARTNERS
					</h2>

					<div className="flex flex-wrap items-center justify-center gap-8 space-x-12">
						<Image
							src="/partner-expedia.png"
							alt="Expedia"
							width={120}
							height={40}
							className="grayscale transition-all hover:grayscale-0"
						/>
						<Image
							src="/partner-booking.png"
							alt="Booking.com"
							width={120}
							height={40}
							className="grayscale transition-all hover:grayscale-0"
						/>
						<Image
							src="/partner-airbnb.png"
							alt="Airbnb"
							width={120}
							height={40}
							className="grayscale transition-all hover:grayscale-0"
						/>
						<Image
							src="/partner-trivago.png"
							alt="Trivago"
							width={120}
							height={40}
							className="grayscale transition-all hover:grayscale-0"
						/>
						<Image
							src="/partner-priceline.png"
							alt="Priceline"
							width={120}
							height={40}
							className="grayscale transition-all hover:grayscale-0"
						/>
						<Image
							src="/partner-kayak.png"
							alt="Kayak"
							width={120}
							height={40}
							className="grayscale transition-all hover:grayscale-0"
						/>
					</div>
				</div>
			</section>

			{/* Top Book Now Section */}
			<section className="bg-gray-50 py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
						TOP BOOK NOW
					</h2>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
						{[
							{
								image: '/property1.jpg',
								title: 'The Blueberry',
								price: '$30.00',
								rating: 4.8,
								location: 'Los Angeles'
							},
							{
								image: '/property2.jpg',
								title: 'Sea Breeze',
								price: '$30.00',
								rating: 4.8,
								location: 'New York'
							},
							{
								image: '/property3.jpg',
								title: 'The Orchard',
								price: '$30.00',
								rating: 4.8,
								location: 'California'
							},
							{
								image: '/property4.jpg',
								title: 'Lavendel',
								price: '$30.00',
								rating: 4.8,
								location: 'San Francisco'
							},
							{
								image: '/property5.jpg',
								title: 'Green Gardens',
								price: '$30.00',
								rating: 4.8,
								location: 'Las Vegas'
							},
							{
								image: '/property6.jpg',
								title: 'Countryside',
								price: '$30.00',
								rating: 4.8,
								location: 'New York'
							},
							{
								image: '/property7.jpg',
								title: 'Green Landscape',
								price: '$30.00',
								rating: 4.8,
								location: 'California'
							},
							{
								image: '/property8.jpg',
								title: 'City View',
								price: '$30.00',
								rating: 4.8,
								location: 'Los Angeles'
							}
						].map((property, index) => (
							<div
								key={index}
								className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
							>
								<div className="relative h-48">
									<Image
										src={property.image}
										alt={property.title}
										fill
										className="object-cover"
									/>
									<div className="absolute right-3 top-3 rounded bg-black bg-opacity-50 px-2 py-1 text-sm text-white">
										{property.rating}
									</div>
								</div>
								<div className="p-4">
									<h3 className="mb-1 text-lg font-semibold">
										{property.title}
									</h3>
									<p className="mb-2 text-sm text-gray-600">
										{property.location}
									</p>
									<div className="flex items-center justify-between">
										<span className="font-bold text-blue-600">
											{property.price}
										</span>
										<div className="flex items-center space-x-1">
											<Star className="h-4 w-4 fill-current text-yellow-400" />
											<span className="text-sm text-gray-600">
												{property.rating}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<button className="font-medium text-blue-600 hover:underline">
							See All
						</button>
					</div>
				</div>
			</section>

			{/* Explore Kerala Section */}
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

			{/* Feature News Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-8 flex items-center justify-between">
						<h2 className="text-3xl font-bold text-gray-800">
							Feature News
						</h2>
						<div className="flex space-x-2">
							<button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
								<ChevronLeft className="h-5 w-5" />
							</button>
							<button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
								<ChevronRight className="h-5 w-5" />
							</button>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<article className="overflow-hidden rounded-lg bg-white shadow-md">
							<div className="relative h-48">
								<Image
									src="/news1.jpg"
									alt="News 1"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<p className="mb-2 text-sm text-gray-500">
									January 25, 2023
								</p>
								<h3 className="mb-3 text-xl font-semibold">
									The Best Seafood Restaurant at Australia
								</h3>
								<p className="mb-4 text-sm text-gray-600">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry...
								</p>
								<a
									href="#"
									className="text-sm font-medium text-blue-600 hover:underline"
								>
									Read More
								</a>
							</div>
						</article>

						<article className="overflow-hidden rounded-lg bg-white shadow-md">
							<div className="relative h-48">
								<Image
									src="/news2.jpg"
									alt="News 2"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<p className="mb-2 text-sm text-gray-500">
									January 24, 2023
								</p>
								<h3 className="mb-3 text-xl font-semibold">
									Dining on 60 famous check-in spots in Ph...
								</h3>
								<p className="mb-4 text-sm text-gray-600">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry...
								</p>
								<a
									href="#"
									className="text-sm font-medium text-blue-600 hover:underline"
								>
									Read More
								</a>
							</div>
						</article>

						<article className="overflow-hidden rounded-lg bg-white shadow-md">
							<div className="relative h-48">
								<Image
									src="/news3.jpg"
									alt="News 3"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<p className="mb-2 text-sm text-gray-500">
									January 23, 2023
								</p>
								<h3 className="mb-3 text-xl font-semibold">
									Exploring the street food culture of
									Watering Street
								</h3>
								<p className="mb-4 text-sm text-gray-600">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry...
								</p>
								<a
									href="#"
									className="text-sm font-medium text-blue-600 hover:underline"
								>
									Read More
								</a>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-50 py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
						Testimonials
					</h2>
					<InfiniteMovingCards
						items={[
							{
								quote: 'Our trip to Kerala was absolutely magical! The backwaters, the spice plantations, and the warm hospitality made it an unforgettable experience. Highly recommend!',
								name: 'Sarah Johnson',
								title: 'United States'
							},
							{
								quote: "The most relaxing vacation we've ever had. From the houseboat stay to the Ayurvedic treatments, everything was perfectly organized and authentic.",
								name: 'David Chen',
								title: 'Singapore'
							},
							{
								quote: "Kerala's natural beauty exceeded all our expectations. The tea gardens in Munnar and the wildlife in Periyar were highlights of our journey.",
								name: 'Emma Williams',
								title: 'United Kingdom'
							},
							{
								quote: 'An incredible cultural experience! The traditional Kathakali performances and delicious Kerala cuisine made our trip truly special.',
								name: 'Michael Schmidt',
								title: 'Germany'
							},
							{
								quote: 'Perfect blend of adventure and relaxation. The beaches, hill stations, and friendly locals made Kerala our favorite destination in India.',
								name: 'Sophie Martin',
								title: 'France'
							}
						]}
						direction="right"
						speed="slow"
					/>
				</div>
			</section>

			{/* Newsletter Section */}
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

			{/* Footer */}
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
		</div>
	)
}

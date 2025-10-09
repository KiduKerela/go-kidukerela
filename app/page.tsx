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

export default function Homepage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="bg-white shadow-sm">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<span className="text-2xl font-bold text-blue-600">
								KIDU KERALA
							</span>
						</div>
						<div className="hidden space-x-8 md:flex">
							<a
								href="#"
								className="text-gray-700 hover:text-blue-600"
							>
								Home
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-blue-600"
							>
								Destination
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-blue-600"
							>
								Blog
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-blue-600"
							>
								About
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-blue-600"
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative h-screen">
				<div className="absolute inset-0">
					<Image
						src="/hero-background.jpg"
						alt="Kerala Backwaters"
						fill
						className="object-cover"
						priority
					/>
					<div className="bg-opacity-20 absolute inset-0 bg-black"></div>
				</div>

				<div className="relative z-10 flex h-full items-center justify-center">
					<div className="mx-auto max-w-4xl px-4 text-center text-white">
						<div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-gray-800">
							<h1 className="mb-4 text-3xl font-bold text-blue-600">
								Good Morning!
							</h1>
							<p className="mb-6 text-gray-600">
								Explore beautiful places in the world with
								Aranda
							</p>

							{/* Search Form */}
							<div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
								<div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-3">
									<MapPin className="h-5 w-5 text-gray-400" />
									<div>
										<p className="text-xs text-gray-500">
											Location
										</p>
										<p className="font-medium">Dubai</p>
									</div>
								</div>

								<div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-3">
									<Calendar className="h-5 w-5 text-gray-400" />
									<div>
										<p className="text-xs text-gray-500">
											Check in
										</p>
										<p className="font-medium">01 Feb</p>
									</div>
								</div>

								<div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-3">
									<Calendar className="h-5 w-5 text-gray-400" />
									<div>
										<p className="text-xs text-gray-500">
											Check out
										</p>
										<p className="font-medium">07 Feb</p>
									</div>
								</div>

								<div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-3">
									<Users className="h-5 w-5 text-gray-400" />
									<div>
										<p className="text-xs text-gray-500">
											Guest
										</p>
										<p className="font-medium">2 Guest</p>
									</div>
								</div>
							</div>

							<button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700">
								<Search className="h-5 w-5" />
								<span>Search</span>
							</button>
						</div>
					</div>
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
									<div className="bg-opacity-50 absolute top-3 right-3 rounded bg-black px-2 py-1 text-sm text-white">
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
			<section className="bg-gray-900 py-16 text-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-6 text-4xl font-bold">EXPLORE KERALA</h2>
					<p className="mb-8 max-w-2xl text-lg">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s
					</p>

					<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/kerala-boat.jpg"
								alt="Boat Ride"
								fill
								className="object-cover"
							/>
							<div className="bg-opacity-40 absolute inset-0 flex items-end bg-black">
								<div className="p-4">
									<h3 className="text-xl font-semibold">
										Boat Ride
									</h3>
								</div>
							</div>
						</div>

						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/kerala-beach.jpg"
								alt="Beach Life"
								fill
								className="object-cover"
							/>
							<div className="bg-opacity-40 absolute inset-0 flex items-end bg-black">
								<div className="p-4">
									<h3 className="text-xl font-semibold">
										Beach Life
									</h3>
								</div>
							</div>
						</div>

						<div className="relative h-64 overflow-hidden rounded-lg">
							<Image
								src="/kerala-culture.jpg"
								alt="Cultural Stay"
								fill
								className="object-cover"
							/>
							<div className="bg-opacity-40 absolute inset-0 flex items-end bg-black">
								<div className="p-4">
									<h3 className="text-xl font-semibold">
										Cultural Stay
									</h3>
								</div>
							</div>
						</div>
					</div>

					<button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
						Read More
					</button>
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
					<div className="mb-8 flex items-center justify-between">
						<h2 className="text-3xl font-bold text-gray-800">
							Testimonials
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
						{[
							{
								name: 'Jerome Bell',
								title: 'Las Vegas',
								image: '/avatar1.jpg',
								rating: 5,
								text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
							},
							{
								name: 'Jerome Bell',
								title: 'Las Vegas',
								image: '/avatar2.jpg',
								rating: 5,
								text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
							},
							{
								name: 'Jerome Bell',
								title: 'Las Vegas',
								image: '/avatar3.jpg',
								rating: 5,
								text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
							}
						].map((testimonial, index) => (
							<div
								key={index}
								className="rounded-lg bg-white p-6 shadow-md"
							>
								<div className="mb-4 flex items-center">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										width={48}
										height={48}
										className="rounded-full"
									/>
									<div className="ml-4">
										<h4 className="font-semibold">
											{testimonial.name}
										</h4>
										<p className="text-sm text-gray-600">
											{testimonial.title}
										</p>
									</div>
								</div>
								<div className="mb-4 flex">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-current text-yellow-400"
											/>
										)
									)}
								</div>
								<p className="text-gray-600">
									{testimonial.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center rounded-2xl bg-gray-100 p-8 md:flex-row md:p-12">
						<div className="mb-8 md:mb-0 md:w-1/2">
							<Image
								src="/newsletter-image.jpg"
								alt="Newsletter"
								width={400}
								height={300}
								className="rounded-lg"
							/>
						</div>
						<div className="md:w-1/2 md:pl-12">
							<h2 className="mb-4 text-3xl font-bold text-gray-800">
								Get special offers, and more from Travelworld
							</h2>
							<p className="mb-6 text-gray-600">
								Subscribe to see secret deals prices drop the
								moment you sign up!
							</p>
							<div className="flex">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 rounded-l-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
								/>
								<button className="rounded-r-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
									Subscribe
								</button>
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

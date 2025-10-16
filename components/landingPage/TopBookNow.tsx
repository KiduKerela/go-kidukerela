import Image from 'next/image'
import { Star } from 'lucide-react'

const properties = [
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
]

export default function TopBookNow() {
	return (
		<section className="bg-gray-50 py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
					TOP BOOK NOW
				</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{properties.map((property, index) => (
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
	)
}

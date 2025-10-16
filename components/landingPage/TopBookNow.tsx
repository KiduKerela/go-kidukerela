import Image from 'next/image'
import { Star } from 'lucide-react'
import KeralaProperty1 from '@/public/kerala_image_10.jpg'

const properties = [
	{
		image: KeralaProperty1,
		title: 'The Blueberry',
		rating: 4.8,
		location: 'Los Angeles'
	},
	{
		image: KeralaProperty1,
		title: 'Sea Breeze',
		rating: 4.8,
		location: 'New York'
	},
	{
		image: KeralaProperty1,
		title: 'The Orchard',
		rating: 4.8,
		location: 'California'
	},
	{
		image: KeralaProperty1,
		title: 'Lavendel',
		rating: 4.8,
		location: 'San Francisco'
	},
	{
		image: KeralaProperty1,
		title: 'Green Gardens',
		rating: 4.8,
		location: 'Las Vegas'
	},
	{
		image: KeralaProperty1,
		title: 'Countryside',
		rating: 4.8,
		location: 'New York'
	},
	{
		image: KeralaProperty1,
		title: 'Green Landscape',
		rating: 4.8,
		location: 'California'
	},
	{
		image: KeralaProperty1,
		title: 'City View',
		rating: 4.8,
		location: 'Los Angeles'
	}
]

export default function TopBookNow() {
	return (
		<section id="top-booking" className="bg-gray-50 py-16">
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
								<div className="flex items-center space-x-1">
									<Star className="h-4 w-4 fill-current text-yellow-400" />
									<span className="text-sm text-gray-600">
										{property.rating}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

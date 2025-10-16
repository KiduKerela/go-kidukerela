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
		<section id="top-booking" className="bg-gray-50 py-12 sm:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:mb-12 sm:text-3xl">
					TOP BOOK NOW
				</h2>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
					{properties.map((property, index) => (
						<div
							key={index}
							className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
						>
							<div className="relative h-40 sm:h-48">
								<Image
									src={property.image}
									alt={property.title}
									fill
									className="object-cover"
								/>
								<div className="absolute right-2 top-2 rounded bg-black bg-opacity-50 px-2 py-1 text-xs text-white sm:right-3 sm:top-3 sm:text-sm">
									{property.rating}
								</div>
							</div>
							<div className="p-3 sm:p-4">
								<h3 className="mb-1 text-base font-semibold sm:text-lg">
									{property.title}
								</h3>
								<p className="mb-2 text-xs text-gray-600 sm:text-sm">
									{property.location}
								</p>
								<div className="flex items-center space-x-1">
									<Star className="h-3.5 w-3.5 fill-current text-yellow-400 sm:h-4 sm:w-4" />
									<span className="text-xs text-gray-600 sm:text-sm">
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

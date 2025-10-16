import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const newsArticles = [
	{
		image: '/news1.jpg',
		date: 'January 25, 2023',
		title: 'The Best Seafood Restaurant at Australia',
		excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	},
	{
		image: '/news2.jpg',
		date: 'January 24, 2023',
		title: 'Dining on 60 famous check-in spots in Ph...',
		excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	},
	{
		image: '/news3.jpg',
		date: 'January 23, 2023',
		title: 'Exploring the street food culture of Watering Street',
		excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	}
]

export default function FeatureNews() {
	return (
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
					{newsArticles.map((article, index) => (
						<article key={index} className="overflow-hidden rounded-lg bg-white shadow-md">
							<div className="relative h-48">
								<Image
									src={article.image}
									alt={`News ${index + 1}`}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<p className="mb-2 text-sm text-gray-500">
									{article.date}
								</p>
								<h3 className="mb-3 text-xl font-semibold">
									{article.title}
								</h3>
								<p className="mb-4 text-sm text-gray-600">
									{article.excerpt}
								</p>
								<a
									href="#"
									className="text-sm font-medium text-blue-600 hover:underline"
								>
									Read More
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

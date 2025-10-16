import Image from 'next/image'
import {
	NewsCarousel,
	NewsCarouselItem
} from '@/components/landingPage/NewsCarousel'
import KeralaNews1 from '@/public/kerala_image_10.jpg'
import KeralaNews2 from '@/public/kerala_image_11.jpg'
import KeralaNews3 from '@/public/kerala_image_12.jpg'

const newsArticles = [
	{
		image: KeralaNews1,
		date: 'January 25, 2023',
		title: 'The Best Seafood Restaurant at Australia',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	},
	{
		image: KeralaNews2,
		date: 'January 24, 2023',
		title: 'Dining on 60 famous check-in spots in Ph...',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	},
	{
		image: KeralaNews3,
		date: 'January 23, 2023',
		title: 'Exploring the street food culture of Watering Street',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	},
	{
		image: KeralaNews1,
		date: 'January 22, 2023',
		title: 'Hidden Gems: Local Cuisine You Must Try',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	},
	{
		image: KeralaNews2,
		date: 'January 21, 2023',
		title: 'Top 10 Travel Destinations for Food Lovers',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
	}
]

export default function FeatureNews() {
	return (
		<section id="news" className="py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<NewsCarousel>
					{newsArticles.map((article, index) => (
						<NewsCarouselItem key={index} className="p-3">
							<article className="overflow-hidden rounded-lg bg-white shadow-md">
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
								</div>
							</article>
						</NewsCarouselItem>
					))}
				</NewsCarousel>
			</div>
		</section>
	)
}

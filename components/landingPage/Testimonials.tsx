import { InfiniteMovingCards } from '@/components/ui/infinite-moving-card'
import KeraHotel from '@/public/kerala_image_9.jpg'
import Image from 'next/image'

const testimonials = [
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
]

export default function Testimonials() {
	return (
		<section className="relative py-12 sm:py-16">
			<Image
				src={KeraHotel}
				alt="Kerala Hotel"
				fill
				className="object-cover"
			/>
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl">
					Testimonials
				</h2>
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
			</div>
		</section>
	)
}

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-card'

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
		<section className="bg-gray-50 py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
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

import Image from 'next/image'

export default function Partners() {
	return (
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
	)
}

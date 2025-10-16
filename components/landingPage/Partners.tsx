import Image from 'next/image'
import PartnerAirbnb from '@/public/Airbnb_Logo_1.png'
import PartnerAirIndia from '@/public/Air India_Logo_0.svg'
import PartnerKeralaTourism from '@/public/kerala_tourism.png'

export default function Partners() {
	return (
		<section className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
					OUR PARTNERS
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-8 space-x-12">
					<Image
						src={PartnerAirbnb}
						alt="Expedia"
						width={120}
						height={40}
					/>
					<Image
						src={PartnerAirIndia}
						alt="Booking.com"
						width={120}
						height={40}
					/>
					<Image
						src={PartnerKeralaTourism}
						alt="Airbnb"
						width={120}
						height={40}
					/>
				</div>
			</div>
		</section>
	)
}

import Image from 'next/image'
import PartnerAirbnb from '@/public/Airbnb_Logo_1.png'
import PartnerAirIndia from '@/public/Air India_Logo_0.svg'
import PartnerKeralaTourism from '@/public/kerala_tourism.png'

export default function Partners() {
	return (
		<section className="bg-white py-8 sm:py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-6 text-center text-xl font-bold text-gray-800 sm:mb-8 sm:text-2xl">
					OUR PARTNERS
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
					<div className="flex items-center justify-center">
						<Image
							src={PartnerAirbnb}
							alt="Expedia"
							width={100}
							height={35}
							className="h-auto w-20 sm:w-28 lg:w-32"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={PartnerAirIndia}
							alt="Booking.com"
							width={100}
							height={35}
							className="h-auto w-20 sm:w-28 lg:w-32"
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={PartnerKeralaTourism}
							alt="Airbnb"
							width={100}
							height={35}
							className="h-auto w-20 sm:w-28 lg:w-32"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

import { Shield, Award, Clock } from 'lucide-react'

export default function WhyChooseUs() {
	return (
		<section className="mt-24 bg-gray-50 py-12 sm:mt-32 sm:py-16 md:mt-40">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:mb-12 sm:text-3xl">
					WHY CHOOSE US?
				</h2>

				<div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
					<div className="text-center">
						<div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:mb-4 sm:h-16 sm:w-16">
							<Shield className="h-7 w-7 text-blue-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-2 text-lg font-semibold sm:text-xl">
							Competitive Prices
						</h3>
						<p className="text-sm text-gray-600 sm:text-base">
							With over 500 suppliers and the purchasing power of
							our planning and supporting industry, Lorem Ipsum
						</p>
					</div>

					<div className="text-center">
						<div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:mb-4 sm:h-16 sm:w-16">
							<Award className="h-7 w-7 text-blue-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-2 text-lg font-semibold sm:text-xl">
							Award Winning
						</h3>
						<p className="text-sm text-gray-600 sm:text-base">
							With over 500 suppliers and the purchasing power of
							our planning and supporting industry, Lorem Ipsum
						</p>
					</div>

					<div className="text-center">
						<div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:mb-4 sm:h-16 sm:w-16">
							<Clock className="h-7 w-7 text-blue-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-2 text-lg font-semibold sm:text-xl">
							Seamless Experience
						</h3>
						<p className="text-sm text-gray-600 sm:text-base">
							With over 500 suppliers and the purchasing power of
							our planning and supporting industry, Lorem Ipsum
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
